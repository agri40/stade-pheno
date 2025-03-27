# Projet de Détection des Stades Phénologiques et de Prédiction du Rendement des Orangers
 
 Ce projet vise à résoudre deux tâches principales : la détection des stades phénologiques des orangers à l'aide de Convolutional Neural Networks (CNN) et la prédiction du rendement des arbres à l'aide du modèle YOLO (You Only Look Once). Ce projet utilise TensorFlow et Keras pour la partie détection des stades, et YOLO pour la prédiction du rendement. Ce système s'inscrit dans le cadre de la gestion d'une ferme d'orangers, permettant une gestion optimisée de la culture.

---- 

## Table des matières
1. [Introduction](#1-introduction)
2. [Partie 1: Détection des Stades Phénologiques](#partie-1-détection-des-stades-phénologiques)
   1. [Description du modèle CNN](#Description-du-modèle-CNN)
   2. [Prétraitement des données](#prétraitement-des-données)
   3. [Entraînement et évaluation](#entrainement-et-évaluation)
   4. [Exportation du modèle en TensorFlow Lite](#exportation-du-modèle-en-tensorflow-lite)
3. [Partie 2: Prédiction du Rendement avec YOLO](#3-partie-2-prédiction-du-rendement-avec-yolo)
   1. [Description du modèle YOLO](#description-du-modèle-yolo)
   2. [Prétraitement des données](#prétraitement-des-données-1)
   3. [Entraînement et évaluation](#entrainement-et-évaluation-1)
   4. [Exportation du modèle en TensorFlow Lite](#exportation-du-modèle-en-tensorflow-lite-1)
4. [Installation et Prérequis](#installation-et-prérequis)
5. [Exécution du projet](#exécution-du-projet)
6. [Résultats et Conclusion](#résultats-et-conclusion)


----


## Introduction

Ce projet est divisé en deux parties distinctes mais complémentaires :

Détection des stades phénologiques des orangers : La première partie utilise un modèle CNN pour classer les images des orangers en trois stades phénologiques : Dormance, Fruits verts, et Fruits mûrs. L’objectif est de détecter l'état de la plante à partir des images des arbres pour permettre un suivi précis de leur évolution.

Prédiction du rendement des orangers : La seconde partie se concentre sur l'estimation du rendement des orangers à partir des images. Un modèle YOLO est utilisé pour détecter et compter le nombre de fruits et fleurs sur les arbres, ce qui permet de prédire le rendement en fonction de la densité des fruits détectés.

----

## Partie 1: Détection des Stades Phénologiques

---- 

### Description du modèle CNN

----

Le modèle CNN est conçu pour détecter les trois principaux stades phénologiques des orangers :

  - Dormance

  - Fruits verts

  - Fruits mûrs

Le modèle utilise EfficientNetB0, un modèle pré-entraîné sur ImageNet, comme base pour extraire des caractéristiques d'image, et ajoute des couches de classification personnalisées pour la détection des stades.

----

###  Prétraitement des données

- Les données sont d'abord chargées et prétraitées. Les étapes incluent :

- Redimensionnement des images à la taille (240, 240)

- Normalisation des pixels à la plage [0, 1]

- Augmentation des données pour améliorer la robustesse du modèle (rotation aléatoire, zoom, etc.)

- Les images sont ensuite divisées en ensembles d'entraînement, de validation et de test.

---- 

### 1.3 Entraînement et évaluation

Le modèle est entraîné pendant 20 époques avec les données d’entraînement, en utilisant la fonction de perte categorical_crossentropy et l'optimiseur Adam. Des callbacks comme EarlyStopping et ModelCheckpoint sont utilisés pour arrêter l’entraînement en cas de non-amélioration de la performance et pour sauvegarder les meilleurs poids.

----

### 1.4 Exportation du modèle en TensorFlow Lite
Après l'entraînement du modèle, il est converti en TensorFlow Lite pour être utilisé sur des appareils mobiles .

----

## Partie 2: Prédiction du Rendement avec YOLO

----

### 2.1 Description du modèle YOLO

Le modèle YOLO (You Only Look Once) est utilisé pour la détection des différents éléments présents sur les orangers, à savoir :

- Fruits mûrs

- Fruits verts

- Fleurs d'orange

Le modèle YOLO est formé pour détecter et compter ces trois catégories d'objets dans les images des orangers. En comptant ces éléments, nous pouvons estimer le rendement global de l'arbre en fonction du nombre de fruits (verts et mûrs) et de fleurs.

Le modèle est affiné pour reconnaître spécifiquement ces objets, en utilisant un dataset annoté comportant des images d'orangers avec des annotations pour chaque catégorie.

----

### 2.2 Prétraitement des données

- Les images doivent être annotées pour chaque catégorie (fruits mûrs, fruits verts, fleurs d'orange). Le processus de prétraitement inclut :

- Annotation des objets : Chaque fruit (vert ou mûr) et chaque fleur d'orange est annoté dans l'image avec ses coordonnées.

- Conversion des annotations : Les annotations sont converties en format YOLO (bounding box et classe correspondante).

- Redimensionnement des images : Les images sont redimensionnées à la taille requise pour YOLO, généralement (416x416) ou (608x608).


Le format des annotations est généralement le suivant :

- Fruits mûrs : Classe 0

- Fruits verts : Classe 1

- Fleurs d'orange : Classe 2

----

### 2.3 Entraînement et évaluation

Le modèle YOLO est entraîné avec les images annotées pour les trois catégories d'objets. Le nombre d'objets détectés (fruits mûrs, fruits verts et fleurs d'orange) dans chaque image permet de calculer une estimation du rendement de l'arbre.


Lors de l'entraînement, les images sont passées à travers le modèle YOLO, qui génère des prédictions de bounding boxes avec les classes correspondantes pour chaque objet détecté.

 - Estimation du rendement
Une fois le modèle formé, les images des orangers sont analysées pour compter les instances de chaque catégorie (fruits mûrs, fruits verts, fleurs d'orange). En fonction des counts de chaque catégorie, nous pouvons estimer le rendement en termes de nombre de fruits et de fleurs :

Rendement estimé : La prédiction du rendement sera calculée en fonction du nombre total de fruits (verts + mûrs) détectés et des fleurs présentes sur l'arbre.
### 1.4 Exportation du modèle en TensorFlow Lite
Après l'entraînement du modèle, il est converti en TensorFlow Lite pour être utilisé sur des appareils mobiles .

----

## Installation et Prérequis

Pour exécuter ce projet, assurez-vous d'avoir installé les bibliothèques suivantes :

- TensorFlow

- Keras

- OpenCV

- YOLO (vous pouvez utiliser une implémentation de YOLOv4 ou YOLOv5 selon la version choisie)

- Pandas

- Scikit-learn



``` bash

pip install tensorflow opencv-python pandas scikit-learn

```

----

## Exécution du projet

Clonez ce repository :

``` bash

git clone https://github.com/agri40/stade-pheno.git
cd nom_du_repo

```



