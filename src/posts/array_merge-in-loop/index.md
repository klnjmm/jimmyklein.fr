---
title: "Evitez d'utiliser la fonction array_merge dans une boucle en PHP"
date: "2019-10-12"
---

Je vois assez souvent dans du code PHP l'utilisation de la fonction `array_merge` dans des boucles `for`/`foreach`/`while` 😱 :

```php
$arraysToMerge = [ [1, 2], [2, 3], [5, 8] ];

$arraysMerged = [];
foreach($arraysToMerge as $array) {
    $arraysMerged = array_merge($arraysMerged, $array);
}
```
Cette habitude est particulièrement mauvaise car **les performances peuvent devenir désastreuses** (surtout sur l'utilisation mémoire).

Depuis PHP 5.6, il y a un nouvel opérateur : **l'opérateur de décomposition** (ou spread operator).

```php
$arraysToMerge = [ [1, 2], [2, 3], [5,8] ];

$arraysMerged = array_merge([], ...$arraysToMerge);
```

* Plus de problème de performance
* BONUS : Plus de boucle `for`/`foreach`/`while`
* BONUS : Traitement effectué en **une ligne**

Regardez maintenant votre base de code, je suis sur que vous pourrez trouver des endroits à améliorer 👩‍💻👨‍💻 !

<div class="bg-blue-100 px-4 py-4 lg:mb-4 mt-4 lg:mt-12">
        <p class="px-4 py-4">
        Tu as vu sur Twitter <span class="text-blue-700 font-bold">mes conseils et astuces sur le PHP</span> et tu aimerais les recevoir <span class="text-blue-700 font-bold">directement dans ta boîte mail</span> ?<br/>
        Ou justement tu n'as pas Twitter (ou tu ne me suis pas encore ^^) et <span class="text-blue-700 font-bold">tu aimerais toi aussi recevoir ces conseils</span> ?<br/><br/>
        Inscris-toi alors à ma dev letter pour recevoir régulièrement dans ta boîte mail <span class="text-blue-700 font-bold">mes conseils, mes nouveaux articles, des vidéos à voir, des outils à découvrir</span> et encore bien d’autres choses.
        </p>
         <a href="http://bit.ly/klnjmmdevletter" class="bg-blue-200 w-full block py-4 px-4 mt-4 font-bold text-blue-700 mb-4 text-center">Je m'inscris</a>
</div>

---

#Ressources
* Nouveautés PHP 5.6 : https://php.net/manual/fr/migration56.new-features.php