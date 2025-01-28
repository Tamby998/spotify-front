# SpotifyFront

Ce projet est un clone frontend de Spotify développé avec Angular. Il fait partie d'un projet plus large visant à reproduire les fonctionnalités principales de Spotify.

## Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm (généralement installé avec Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/Tamby998/spotify-front.git
cd spotify-front
```

2. Installez les dépendances :
```bash
npm install
```

## Développement

Pour lancer le serveur de développement :
```bash
ng serve
```

L'application sera accessible à l'adresse `http://localhost:4200/`. Les modifications des fichiers sources entraîneront un rechargement automatique de l'application.

## Fonctionnalités

- 🎵 Lecture de musique
- 📑 Navigation dans les playlists
- 🔍 Recherche de titres
- 👤 Gestion du profil utilisateur
- 📱 Interface responsive

## Technologies utilisées

- Angular 17
- Bootstrap 5
- Font Awesome
- RxJS
- TypeScript

## Structure du projet

```
spotify-front/
├── src/
│   ├── app/
│   │   ├── components/     # Composants réutilisables
│   │   ├── services/       # Services de l'application
│   │   ├── shared/         # Éléments partagés (interfaces, constantes...)
│   │   └── pages/          # Pages principales de l'application
│   ├── assets/
│   │   ├── scss/          # Styles globaux
│   │   └── images/        # Images et icônes
│   └── environments/      # Configuration des environnements
```

## Commandes utiles

- `ng serve` : Lance le serveur de développement
- `ng build` : Compile le projet pour la production
- `ng test` : Lance les tests unitaires
- `ng generate component nom-composant` : Génère un nouveau composant
- `ng generate service nom-service` : Génère un nouveau service

## Contribution

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## Auteurs

- Tamby Mampionona - *Développement initial*

