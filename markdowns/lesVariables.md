# JavaScript - Stocker les informations avec les variables

# Le [support du cours](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Variables) est associé à la documentation officielle de la fondation Mozilla.  



## Déclaration des variables

`let` permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. Le mot-clé `var`, quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

Voici un morceau de code avec la déclaration de variables

```javascript 
const etude ="etude";
mondiplome = 'IUT';
var maFormation = 'INFO';
let maSpecialite = 'DEV';

if (etude == "etude") {
mondiplome = 'BTS';
var maFormation = 'SIO';
let maSpecialite = 'SLAM';
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
}
    console.log(" en dehors du bloc");
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
```



```javascript runnable
const etude ="etude";
mondiplome = 'IUT';
var maFormation = 'INFO';
let maSpecialite = 'DEV';

if (etude == "etude") {
mondiplome = 'BTS';
var maFormation = 'SIO';
let maSpecialite = 'SLAM';
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
}
    console.log(" en dehors du bloc");
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);

```

## Typage faible
```javascript
var myNumber = '500'; // oops, c'est toujours une chaîne
console.log((typeof(myNumber));
```
```javascript
myNumber = 500; // mieux — maintenant c'est un nombre
typeof(myNumber);
```
Entrez ces quatre lignes dans la console les unes à la suite des autres, et voyez les résultats. Notez l'emploi de la fonction spéciale `typeof()` — elle renvoie le type de donnée placé dans la variable. À son premier appel, elle renverra `string`, car à ce stade la variable `myNumber` contient la chaîne `'500'`. Observez bien et voyez ce que la fonction renvoie au second appel.

```javascript runnable
// Typage faible
```

## Types de variables

Dans l'exercice ci-dessous vous devez créer les variables suivantes : 
- `num`qui contient le nombre 255  
- `txt` qui contient la chaîne de caractère *255*  
- `bin` qui contient la valeur booléenne *vraie*  
- `flt` qui contient la valeur 7,23  

@[Créez les variables demandées ci-dessus]({ "stubs": ["variables01.js"], "command": "node_modules/mocha/bin/mocha test_variables01.js --reporter list" })

## Opération sur les variables

...
