---
title: "S'exercer par les contraintes : les objets calisthenics"
date: "2018-06-01"
cover: "./wtf.png"
---

Comme beaucoup de développeurs, j'aime apprendre de nouvelles choses. Et une chose qui m'intéresse beaucoup est la qualité de code et la manière d'écrire le code. 

Afin de m'exercer dans différents domaines, je fais assez souvent des Katas auxquels je me rajoute des contraintes. Et il y a quelque temps, j'ai découvert les **Object Calisthenics**.

Dernière ce nom un peu barbare se cachent 9 règles à suivre lorsque l'on écrit du code. Et autant dire que certaines de ces règles sont bien contraire à tout ce qu'on apprend à l'école ou dans les différents tutoriels et formations en ligne.

L'objectif est d'avoir un code plus **maintenable**, plus **lisible** et plus **facilement testable**.

> Le code est lu beaucoup plus souvent qu'il n'est écrit

Avoir du code lisible et facilement compréhensible est très important, surtout quand on travail en équipe. Car le code qu'on produit n'est pas seulement pour nous mais aussi pour nos collègues. Mes collègues et moi passons une partie de notre temps à faire de la relecture de code (Code Review) et il est donc important de ne pas avoir à plisser des yeux pour comprendre ce qui est écrit !

![wtf](./wtf.png)

La plupart connaissent déjà les bonnes pratiques comme utiliser une norme d'écriture de code, nommer correctement ses variables ...etc. Les règles des Objets Calisthenics vont beaucoup plus loin que ça :

1. Un seul niveau d'indentation par méthode
2. Ne pas utiliser le mot clé else
3. Encapsuler tous les types primitifs dans des objets
4. First Class Collections : une classe qui contient comme attribut un tableau ne doit contenir aucun autre attribut
5. Un seul point par ligne : en PHP, on va dire deux `->` par ligne (sauf pour les Fluent interface)
6. Ne pas utiliser d'abréviation
7. Garder petites toutes les entités (classes, méthodes)
8. Les classes ne doivent pas contenir plus de ~~deux~~ cinq variables d'instance
9. Aucun getter / setter !

Je ne vous dis pas d'appliquer dès maintenant ces 9 règles mais de tenter l'expérience des objets calisthenics. Le mieux afin de s'exercer est d'avoir des tests unitaires qui vont vous permettre de vous assurer que votre refactoring n'aura pas d'impacts fonctionnels. Lorsque je fais des Katas, je fais du TDD. Cela me permet de m'entrainer au TDD et aussi de pouvoir ensuite faire ma phase de refactoring en toute confiance.

Vous verrez bien au fur et à mesure ce que vous trouverez pertinent d'appliquer dans votre code quotidien.

Amusez-vous bien !

---

#Ressources
* Article de William Durand : https://williamdurand.fr/2013/06/03/object-calisthenics/
* Conférence et slide de Rafael Dohms: https://youtu.be/GtB5DAfOWMQ et https://www.slideshare.net/rdohms/object-calisthenicstek13
* Live Coding de Kevin Timmins en Java sur le Checkout Kata : https://youtu.be/kBNThogwWYw