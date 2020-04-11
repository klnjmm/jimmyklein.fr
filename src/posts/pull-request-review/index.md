---
title: "Une bonne review commence par une bonne pull request"
date: "2019-11-08"
---

J’ai eu à commencer cette semaine la review d’une fonctionnalité assez importante pour notre produit. Et lorsque je me suis affecté la demande, j’ai commencé à déchanter : cette évolution induit **7 Pull Requests sur 7 dépôts Git différents**, avec certaines PR contenant **plus de 100 fichiers ajoutés / modifiés**. 

Et malheureusement, c'est le genre de PR où l'on va le moins rentrer dans les détails, où **on va survoler assez rapidement chaque fichier sans réellement détecter d'éventuels problèmes techniques ou fonctionnels.**


> Le temps passé à faire une relecture de code est inversement proportionnel aux nombres de fichiers et de lignes de code ajoutés et modifiés. 


# Que faire lorsqu'on est face à ce genre de situation ?

* ~~Fermer son navigateur, faire comme si on n'avait rien vu et laisser la review à ses collègues.~~
* ~~Merger toutes les PRs, on verra bien ce que ça donne en prod.~~

Dans ce cas, on peut rapidement se retrouver **perdu, stressé et pas capable de faire cette review tout seul**. Sans partir défaitiste, je pense que ce genre de review est vraiment difficile et qu'on va passer à côté de plusieurs choses. Mais le but va être **de limiter les dégâts**.

## Imprégniez-vous de la spécification

Il m'arrive d'ouvrir les Pull Request sans même regarder le contenu de la demande. Je regarde le titre et je me lance dans la relecture du code. Cette habitude n'est pas très bonne mais dans notre cas, elle est vraiment à bannir. **Bien comprendre la spécification** va peut-être vous permettre de prendre en main plus rapidement les modifications et d'avoir un point de vue global sur ce qui a été fait.

## Faites la review avec le développeur

Le meilleur moyen de bien comprendre est **d'avoir le développeur sous la main**, de le faire venir à votre poste de travail ou de faire un partage d'écran si vous êtes en télétravail. **Faites la review ensemble**, prenez le temps, posez lui des questions pour être sûr de bien tout comprendre. Il n'y a pas de honte à ne pas comprendre quelque chose, et il vaut mieux clarifier le code maintenant que de le découvrir le jour où il y a un bug en prod. Par contre, **c'est vous qui avez la souris et le clavier et qui naviguez dans le code**. Car si vous laissez faire l'auteur du code, vous allez rapidement vous sentir perdu et perdre tout le bénéfice de cette relecture en binôme.

## Faites la review avec un autre collègue
Si le développeur n'est pas là (en congés, malade, mission terminée), alors demandez à un autre collègue de vous aider sur cette review. Mettez-vous comme pour le point précédent à deux devant le même écran et parcourez ensemble les pull requests. Votre collègue sera aussi perdu que vous, mais chacun a sa manière d'appréhender le code, donc vous arriverez plus facilement à deux à prendre du recul sur ce qui a été fait avant de rentrer dans le détails.

## Faites la review en plusieurs fois
Au bout d'un certain temps, vous allez commencer à être **moins concentrés** et à faire défiler les fichiers comme vous faites défiler votre mur Facebook. Donc **prenez une pause, levez-vous, allez boire un verre d'eau ou même arrêtez la review et reprenez la que le lendemain**. Cela permet de se reposer un peu et qui sait, vous aurez peut-être une illumination pendant la nuit.

# Que faire pour éviter que cela se reproduise ?

Ce genre de review ne devrait pas arriver ou devrait être vraiment exceptionnel. Voici plusieurs points pour éviter de se retrouver dans ce genre de situation :

## Commencez la review avant la fin de développement
Tout d'abord, cela va permettre de comprendre plus rapidement ce qui est fait et donc aussi de détecter plus tôt des problèmes de conception et/ou une mauvaise compréhension de la spécification.

## Faites du pair programming
Pour compléter un peu le point précédent, faites du **pair programming**. Si votre organisation ne le permet pas trop, prenez un peu de temps chaque jour pour faire un point d'avancement. Regardez le code, posez des questions sur ce qui a été fait et sur ce qui va être fait (pourquoi / quoi / comment). Cela va permettre de dégrossir rapidement tout le travail voir même de rendre la review finale complètement inutile. (je ne débattrai pas ici du *pair programming vs code review*)

## Découpez plus finement vos demandes.
Une fonctionnalité qui va prendre minimum 5 - 10 jours à développer risque de forcément produire beaucoup plus de code d'un coup. **Discutez avec vos collègues et avec le product owner afin de voir s'il n'est pas possible de découper plus finement la fonctionnalité**. Cela permettra d'avoir des pull requests plus petites, plus maitrisés et de se sentir moins seul devant l'écran lors de la review (j'ai d'ailleurs vu un tweet cette semaine sur l'exercice Elephant Carpaccio qui me tente pas mal). 

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Chez <a href="https://twitter.com/Yousignfr?ref_src=twsrc%5Etfw">@Yousignfr</a> (avec notre gourou agile <a href="https://twitter.com/clebiez?ref_src=twsrc%5Etfw">@clebiez</a>) on a fait un super atelier de découpage de story il y a quelques semaines &quot;Elephant Carpaccio&quot;, c&#39;était très rigolo et en même temps hyper révélateur, je conseille à toutes les teams de le faire un jour !<a href="https://t.co/TLnH23OPbU">https://t.co/TLnH23OPbU</a></p>&mdash; Gabriel Pillet 🐙 (@tentacode) <a href="https://twitter.com/tentacode/status/1192709504594579456?ref_src=twsrc%5Etfw">November 8, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Décrire les pull requests
Demandez à vos collègues de prendre un peu de temps pour **remplir la description de leur pull request**. Il n'est pas question ici de dire qu'est ce qui a été fait, mais plutôt de dire **pourquoi** ça a été fait comme ça et quel était **le contexte**.


J'espère que ces quelques points pourront vous aider. Et je suis aussi curieux de savoir comment vous faites dans ces cas-là. Est-ce que ça vous arrive souvent ce genre de review ? Comment vous sentez-vous à ce moment là ? Quelles méthodes avez-vous pour sortir la tête de l'eau ? 

Retrouvez-moi sur [Twitter](http://bit.ly/klnjmmtwitter) pour échanger sur ce sujet !

<div class="bg-blue-100 px-4 py-4 lg:mb-4 mt-4 lg:mt-12">
        <p class="px-4 py-4">
        Tu as vu sur Twitter <span class="text-blue-700 font-bold">mes conseils et astuces sur le PHP</span> et tu aimerais les recevoir <span class="text-blue-700 font-bold">directement dans ta boîte mail</span> ?<br/>
        Ou justement tu n'as pas Twitter (ou tu ne me suis pas encore ^^) et <span class="text-blue-700 font-bold">tu aimerais toi aussi recevoir ces conseils</span> ?<br/><br/>
        Inscris-toi alors à ma dev letter pour recevoir régulièrement dans ta boîte mail <span class="text-blue-700 font-bold">mes conseils, mes nouveaux articles, des vidéos à voir, des outils à découvrir</span> et encore bien d’autres choses.
        </p>
         <a href="http://bit.ly/klnjmmdevletter" class="bg-blue-200 w-full block py-4 px-4 mt-4 font-bold text-blue-700 mb-4 text-center">Je m'inscris</a>
</div>

---

# Ressources

* Elephant carpaccio : https://www.occitech.fr/blog/2014/05/decoupez-vos-stories-en-carpaccio/