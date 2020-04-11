---
title: "Revue : Refactoring to collections"
date: "2018-06-08"
---
Toujours dans le but d'améliorer ma manière d'écrire du code, j'ai découvert par tweet et retweet Adam Wathan et son livre **Refactoring to Collections**. Et autant dire que le slogan **Never write another loop again** a suscité ma curiosité.

Dès le début, l'objectif est clair : ne plus jamais écrire une boucle `for`/`foreach`/`while`. Et là je me dis : impossible ! Ces structures sont tellement ancrées dans nos habitudes que je me vois mal faire autrement.

Si on prend un exemple très simple écrit de façon très classique :

```php
public function doubleAllValue(array $numbers)
{
    $result = [];
    foreach ($numbers as $number) {
        $result[] = $number * 2;
    }

    return $result;
}
```

Pour chaque nombre de la variable `$numbers`, on le multiplie par deux et on enregistre le résultat dans la variable *temporaire* `$result`. 

Une autre manière d'écrire ce traitement est d'utiliser les fonctions natives PHP. Pour reprendre l'exemple précédent, nous allons utiliser `array_map()`.

```php
public function doubleAllValue(array $numbers)
{
    return array_map(function($number) {
        return $number * 2;
    }, $numbers);
}
```

Que voit-on ici ? Plus de `foreach`, plus de variable temporaire et une seule instruction. On est donc sur la bonne voie !! De plus, notre traitement métier est sortie dans une fonction (ici anonyme) qui pourrait être réutiliser.

Il existe d'autres méthodes natives en php sur les tableaux comme `array_filter`, `array_reduce` ... Mais ces fonctions ont plusieurs inconvénients :
* Leurs signatures sont différentes et l'ordre des arguments n'est pas le même entre les différentes fonctions. Donc on se réfère souvent à la documentation.
```php
array_walk($callback, $array);
array_filter($array, $callback);
```
* La combinaison de ces méthodes pour effectuer une traitement particulier est particulièrement illisible. Admettons qu'on veuille doubler les valeurs que des nombres positifs :
```php
class integer
{
    public function doubleAllPositiveValue(array $numbers)
    {
        return array_map(function($number) {
                return $number * 2;
            },
            array_filter($numbers, function($number) {
                return $number > 0;
            })
        );
    }
}
```
Autant dire que ce n'est pas très lisible. On pourrait très bien définir des méthodes afin de faciliter la lecture : 

```php
class integer
{
    public function doubleAllPositiveValue(array $numbers)
    {
        return array_map(function($number) {
                return $number * 2;
            },
            $this->keepOnlyPositiveValue($numbers)
        );
    }
    
    private function keepOnlyPositiveValue(array $numbers)
    {
        return array_filter($numbers, function($number) {
                return $number > 0;
        });
    }
}
```

Un peu mieux, on pourrait même aller encore plus loin :
```php
class integer
{
    public function doubleAllPositiveValue(array $numbers)
    {
        return array_map(
            $this->getDoubleValueCallback(),
            $this->keepOnlyPositiveValue($numbers)
        );
    }
    
    private function getDoubleValueCallback()
    {
        return function($number) {
                return $number * 2;
            };
    }
    
    private function keepOnlyPositiveValue(array $numbers)
    {
        return array_filter($numbers, function($number) {
                return $number > 0;
        });
    }
}
```

La méthode `doubleAllPositiveValue` est désormais plus lisible, mais son sens de lecture est inversé : le premier traitement est la dernière ligne (`     $this->keepOnlyPositiveValue($numbers)`) et le résultat est ensuite traité par la ligne précédente (`$this->getDoubleValueCallback()`). Et puis la méthode qui retourne une fonction n'est pas des plus simples à comprendre et surtout à utiliser pour des non initiés.

Et si seulement nous pouvions avoir un mécanisme qui nous permettrait de définir ligne après ligne ce que l'on veut faire.

```php
$result = $numbers
            ->filterPositiveValue()
            ->doubleValue()
            ;
```

Et c'est là que Adam Wathan vient à notre rescousse avec les **Collection pipelines**. Dans son livre, il se base sur Laravel et sur ses classes et méthodes sur les collections. Mais rien n'empêche d'en utiliser d'autres ou d'écrire ses propres classes.

Pour reprendre donc nos exemples précédents.

```php
public function doubleAllValue(array $numbers)
{
    return Collection::make($numbers)
        ->map(
            function($number) {
                return $number * 2;
            }
        )
        ->toArray()
        ;
}
```


Pour info :
* La méthode `Collection::make` construit un objet `Collection` à partir d'un tableau natif. 
* La méthode `toArray()` permet de retourner le tableau contenu dans l'objet `Collect`;

Pour cet exemple qui est assez simple, on ne voit pas trop l'intérêt de ces pipelines. Mais cela devient assez puissant quand on commence à les cumuler :

```php
public function doubleAllPositiveValue(array $numbers)
    {
        return Collection::make($numbers)
            ->filter(function($number) {
                return $number > 0;
            })
            ->map(function($number) {
                return $number * 2;
            })
            ->toArray();
        );
    }
```

Là ça devient intéressant, car notre traitement se fait dans le sens de la lecture : on commencer par filtrer les nombres positifs, puis on les multiplie par deux. 
Et l'utilisation d'une classe pour gérer nos tableaux permet de faire ce que l'on veut. Par exemple, si je veux trouver le premier nombre positif d'un tableau, et le cas échéant retourner `0`;

De manière classique (en utilisant les early return pour éviter les variables temporaires) :
```php
getFirstPositifValue(array $numbers)
{
    foreach ($numbers as $number) {
        if ($number > 0) {
            return $number;
        }
    }
    
    return 0;
}
```

Avec une méthode de la classe Collect
```php
getFirstPositifValue(array $numbers)
{
    return Collection::make($numbers)
        ->first(
            function($number) {
                return $number > 0:
            },
            0
        );
}
```

Je ne sais pas ce que vous en pensez mais je trouve cela plutôt élégant et facilement compréhensible ! Et tout cela ne sont que des exemples simples, cela est encore plus intéressant sur des traitements plus *compliqués*.

Donc si les **Collection pipelines**  vous intéressent, je vous conseille vivement de commencer par :
* demander à recevoir un chapitre gratuit de son livre
* regarder le screencast disponible gratuitement sur son site

Refactoring to collections : https://adamwathan.me/refactoring-to-collections/

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
* Laravel : framework PHP : https://laravel.com
* https://github.com/tightenco/collect : permet d'importer les classes de collections de Laravel dans un projet non Laravel

