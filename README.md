# Police-Discord-Selfbot

Ce petit programme est simple selfbot discord pour changer automatiquement la police d'écriture à chaque message envoyé.

## Utilisation

Il suffit juste de lancer le selfbot, une fois un message envoyé sur discord il sera modifié automatiquement.

## Personnalisation

- Pour lancer le selfbot il faut mettre son token dans le fichier [config.json](https://github.com/gloubiboulgaah/police-discord-selfbot/blob/main/config.json).

- Il est possible d'ajouter des polices dans le fichier [ConfigPolice.json](https://github.com/gloubiboulgaah/police-discord-selfbot/blob/main/ConfigPolice.json).

- Pour modifier la police utilisé, il faut se rendre dans le fichier [index.js](https://github.com/gloubiboulgaah/police-discord-selfbot/blob/main/index.js) (ligne 49) et de modifier le nom de la police :
```js
const transforms = policeJSON.nomdelapolice
```

- L'activité de stream peut aussi être changé dans [config.json](https://github.com/gloubiboulgaah/police-discord-selfbot/blob/main/config.json).

## Informations

- Ce programme n'est pas du tout terminé, je compte ajouter de nouvelles fonctionnalités très bientôt.





