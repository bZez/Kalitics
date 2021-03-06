# Kalitics [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)
Gestionnaire de pointage SF4
![alt text](kalitics.gif "Preview")

## Démo
https://kalitics.bzez.dev/

## Pré-requis

- Apache/Nginx Server
- PHP > 7
- Composer
- Un cerveau
- 5 minutes à perdre

## Installation

### Recuparation du projet

Dans un terminal:
Un simple ``git clone https://github.com/bZez/Kalitics.git``
Ensuite ``cd ./Kalitics.git`` pour e rendre dans la racine du projet.

### Installation des vendors

Executez la commande ``composer install``  a la racine de votre projet.

### Création de la base de données

Executez la commande ``php bin/console doctrine:database:create``.

### Migration

Executez la commande ``php bin/console doctrine:schema:update -f`` (pas de soucis en dev)
ou ``php bin/console make:migration`` suivi de ``php bin/console doctrine:migration:migrate``

## Démarrage

Rendez-vous sur http://VOTRESERVEUR/kalitics.

## Technos

- [jQuery 3](https://code.jquery.com) - Framework JS (front-end)
- [Symfony 4](https://symfony.com) - Framework PHP (back-end)
- [Bootstrap 5](https://getbootstrap.com) - Framework JS/CSS (front-end)
- [FontAwesome](https://fontawesome.com) - Icones (front-end)
- [jQuery Mask](https://code.jquery.com) - Plugin JS (front-end)

## Contributing

Si vous souhaitez contribuer, laissez tomber.

## Auteurs
* **Sam BZEZ** _alias_ [@bzez](https://github.com/bzez)

## License
"As you like."
=======
# Kalitics
