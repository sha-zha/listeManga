# listeManga
Projet en Nodejs et Mongodb 

## Consigne 
**technos**

- technos imposées Nodejs et mongoDB
- packages utiliser : 
  - Express avoir la structure projet, et développer plus facilement facilement
  - Mongoose avantage de créer des schémas, déjà utiliser auparavant 
  - dotenv afin de pouvoir utiliser des variables d'un fichier .env
  - nodemon refresh de façon automatique le code 
  
**OBJECTIFS**

1️⃣ **Afficher** sur une page HTML une information enregistrée dans la base de donnée via node js.

2️⃣ **Ajouter** un formulaire à la page permettant **l'insertion des données dans la base de données**.

3️⃣ Créer une page HTML avec un formulaire permetant l'édition d'une entrée de la base de donnée. L'id de l'entrée à éditer doit etre passé dans l'URL et récupéré via une route sous la forme suivante :
``"/personne/ID". Où "ID" correspond à l'id de l'élément.``

## Projet 

On peut : 
- Gérer une liste de manga
- Gérer les genres  
- Affercter un ou plusieurs genres à un manga 
- effectuer une recherche par genre 
- mettre en ligne

## instaler projet 

**pré-requis : npm, nodejs** 

Installer les dépendances 
- express 4.16.1
- mongoose 6.2.10
- nodemon 

installer mongodb en local 
- télécharger le logiciel depuis le lien suivant https://www.mongodb.com/try/download/community
- créer la base de donnée Manuellement sous le nom de `Mangas` 

## Pour lancer le projet 

- git clone le projet 
- npm install
- dans le fichier `.env` renseigner le chemin de la base de donnée  
- `npm run start` ou `npm run dev` dev utilise nodemon
