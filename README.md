# 🍊 Suivi Phénologique et Estimation du Rendement des Orangers par Vision par Ordinateur

Ce projet propose une solution innovante pour **suivre automatiquement l'évolution des orangers** et **prédire leur rendement** à partir de simples images. Grâce à l'intelligence artificielle, il devient possible de détecter **les fleurs**, **les fruits verts**, **les fruits mûrs**, et de savoir dans quel **état de croissance** se trouve un oranger.

---

## 🎯 Objectif du Projet

### 🌱 1. Détection des stades phénologiques
Comprendre dans quel **stade de développement** se trouve un oranger :  
- Stade de **dormance**
- Stade de **fruits verts**
- Stade de **fruits mûrs**

### 🍊 2. Estimation du rendement
Détecter et **compter automatiquement les fleurs, les fruits verts et les fruits mûrs** sur les arbres pour :
- Estimer la **quantité de fruits** produits par arbre
- Anticiper la **production agricole globale**

---

## 🧠 Comment ça marche ?

### Partie 1 : Classification des stades de l’oranger avec un modèle CNN

Un **réseau de neurones convolutif (CNN)**, basé sur le modèle **EfficientNetB0**, apprend à reconnaître l’état de l’arbre à partir d’une image.

#### 🔧 Étapes :
- Les images sont redimensionnées et normalisées pour être compatibles avec le modèle
- On applique des transformations (rotation, zoom, etc.) pour l'entraîner à diverses conditions et ainsi pour augmenter les données
- On sépare les données en trois groupes : **entraînement**, **validation**, **test**
- Le modèle apprend pendant plusieurs tours ("époques")
- Une fois entraîné, le modèle est **converti au format TensorFlow Lite** pour pouvoir fonctionner sur un smartphone (ou un drone)

---

### Partie 2 : Détection des fruits et fleurs avec YOLOv8

Le modèle **YOLOv8**, spécialisé dans la **détection d’objets**, est utilisé pour **trouver les fleurs et fruits** dans les images.

#### 🎯 Il détecte :
- 🌸 Fleurs d'oranger (classe 0)
- 🍏 Fruits verts (classe 1)
- 🍊 Fruits mûrs (classe 2)

#### 🔧 Étapes :
- Utilisation de Roboflow pour **annoter les images** (certains objets manuellement)
- Les annotations sont **converties au format YOLO**
- Le modèle est entraîné sur les images annotées
- En sortie, on obtient pour chaque image :
  - Le nombre de fleurs
  - Le nombre de fruits verts
  - Le nombre de fruits mûrs

#### 🔢 À partir de là, on peut :
> 🧮 **Estimer le rendement potentiel** de chaque arbre !

---

## 📦 Technologies Utilisées

| Technologie        | Rôle dans le projet                          |
|--------------------|----------------------------------------------|
| TensorFlow/Keras   | Entraînement du modèle CNN                  |
| Roboflow           | Annotation et traitement des images YOLO    |
| YOLOv8 (Ultralytics) | Détection rapide des objets sur image     |
| Python             | Langage principal du projet                  |
| OpenCV             | Manipulation et affichage des images         |
| Pandas / Sklearn   | Analyse et manipulation de données           |

---

## 🛠️ Installation

Avant de commencer, assurez-vous d’avoir Python installé.  
Installez les dépendances nécessaires avec :

```bash
pip install tensorflow keras opencv-python pandas roboflow scikit-learn ultralytics

---

## 🚀 Comment utiliser le projet

### Cloner le dépôt :

```bash
git clone https://github.com/agri40/stade-pheno.git
cd stade-pheno

