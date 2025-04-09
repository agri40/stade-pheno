
# 🌱 Partie 1 : Détection des Stades Phénologiques

## 🧠 Description du modèle CNN

Le modèle **CNN** (Convolutional Neural Network) est conçu pour détecter les trois principaux stades phénologiques des orangers :

- 🌿 **Dormance**
- 🍃 **Fruits verts**
- 🍊 **Fruits mûrs**

### 🔍 Architecture du modèle :
Le modèle repose sur **EfficientNetB0** comme base pour l'extraction des caractéristiques d'image. Des couches de classification personnalisées sont ajoutées pour détecter les stades phénologiques avec une grande précision.

---

## ⚙️ Prétraitement des données

Avant d'entraîner le modèle, les données passent par plusieurs étapes de préparation :

- 🔄 **Redimensionnement** des images à la taille (240, 240)
- 🔥 **Normalisation** des pixels pour améliorer la stabilité de l'apprentissage
- 🔄 **Augmentation des données** pour augmenter la robustesse et éviter le surapprentissage

Les images sont ensuite divisées en trois ensembles :

1. **Ensemble d'entraînement**
2. **Ensemble de validation**
3. **Ensemble de test**

---

## 🚀 Entraînement et évaluation

### ⏱️ Entraînement :
- **Nombre d'époques** : 20
- **Optimiseur** : Adam
- **Fonction de perte** : `categorical_crossentropy`

### 🛡️ Stratégies d'évaluation :
- **EarlyStopping** : Arrêt précoce si aucune amélioration n'est observée
- **ModelCheckpoint** : Sauvegarde des meilleurs poids du modèle pour éviter le surapprentissage

---

## 📱 Exportation du modèle en TensorFlow Lite

Une fois le modèle entraîné et validé, il est exporté au format **TensorFlow Lite** pour permettre son déploiement sur des appareils mobiles et IoT.

---

