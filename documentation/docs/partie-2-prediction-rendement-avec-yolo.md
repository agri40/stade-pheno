
# 🍊 Partie 2 : Prédiction du Rendement avec YOLO

## 🧠 Description du modèle YOLO

Le modèle **YOLO** (You Only Look Once) est utilisé pour détecter et compter les **fruits mûrs**, **fruits verts**, et **fleurs d'orange** sur les arbres. Ce modèle permet de :

- 🏞️ **Détecter** les différents types d'objets présents sur l'arbre
- 📊 **Estimer** le rendement en fonction de la densité des fruits et fleurs détectés

---

## ⚙️ Prétraitement des données

Les étapes de préparation des données incluent :

1. **Annotation des images** :
   - 🍊 **Fruits mûrs** : Classe 2
   - 🍃 **Fruits verts** : Classe 1
   - 🌸 **Fleurs d'orange** : Classe 0

2. **Redimensionnement des images** à la taille requise par YOLO (généralement **416x416** ou **608x608**).

---

## 🚀 Entraînement et évaluation

Le modèle **YOLOv8** est utilisé pour l'entraînement sur des images annotées. Voici comment le modèle est évalué :

- 🎯 **Détection des objets** : Calcul du nombre de fruits et de fleurs détectés
- 📈 **Estimation du rendement** : Prédiction basée sur la densité des objets détectés

---

## 📱 Exportation du modèle en TensorFlow Lite

Après l'entraînement et l'évaluation, le modèle YOLO est exporté en **TensorFlow Lite** pour être utilisé sur des appareils mobiles et des systèmes IoT.

---

