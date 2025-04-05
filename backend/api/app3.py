from flask import Flask, request, jsonify, send_file
from ultralytics import YOLO
import os

app = Flask(__name__)

# Charger le modèle YOLOv8
model = YOLO("model/yolov8_stades6.pt")

# Mapping des classes
CLASS_MAP = {0: "fleur", 1: "orange verte", 2: "orange mature"}

def get_latest_predict_folder():
    """ Trouve le dernier dossier 'predictX/' généré par YOLOv8 """
    base_path = "runs/detect/"
    folders = [f for f in os.listdir(base_path) if f.startswith("predict")]
    if not folders:
        return None
    latest_folder = sorted(folders, key=lambda x: int(x.replace("predict", "") or 0), reverse=True)[0]
    return os.path.join(base_path, latest_folder)

@app.route("/", methods=["GET"])
def home():
    return {"message": "API YOLOv8 fonctionne"}

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "Aucun fichier n'a été fourni"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Nom de fichier vide"}), 400

    try:
        # Sauvegarde temporaire de l'image
        temp_file = "temp_image.jpg"
        file.save(temp_file)

        # Effectuer la prédiction
        results = model(temp_file, conf=0.2, save=True)

        # Trouver le dernier dossier 'predictX/'
        latest_folder = get_latest_predict_folder()
        if latest_folder is None:
            return jsonify({"error": "Aucun dossier de prédiction trouvé"}), 500

        # Chercher l’image annotée dans ce dossier
        image_path = None
        for filename in os.listdir(latest_folder):
            if filename.endswith(".jpg") or filename.endswith(".png"):
                image_path = os.path.join(latest_folder, filename)
                break

        if image_path is None:
            return jsonify({"error": "Aucune image annotée trouvée"}), 500

        # Initialiser un compteur pour les classes
        class_counts = {label: 0 for label in CLASS_MAP.values()}

        # Compter les prédictions par classe
        for box in results[0].boxes:
            class_id = int(box.cls)
            label = CLASS_MAP.get(class_id, "unknown")
            if label in class_counts:
                class_counts[label] += 1

        # Retourner l'URL de l'image + les statistiques de prédiction
        return jsonify({
            "image_url": f"http://localhost:5000/get_image/{filename}",
            "class_counts": class_counts
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/get_image/<filename>", methods=["GET"])
def get_image(filename):
    latest_folder = get_latest_predict_folder()
    if latest_folder is None:
        return jsonify({"error": "Aucun dossier de prédiction trouvé"}), 500

    image_path = os.path.join(latest_folder, filename)
    if os.path.exists(image_path):
        return send_file(image_path, mimetype='image/jpeg')
    else:
        return jsonify({"error": "Image non trouvée"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
