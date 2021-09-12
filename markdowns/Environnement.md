# Mise en place de l'environnement

## Afficher un morceau de code en Javacript

Pour afficher un morceau de code en Javascript, nous utilisons la syntaxe suivante :

```javascript 
// Mon code en langage Javascript;
```

En Javascript, la méthode __console.log()__ envoie un message à la console Web. Le message peut être une chaîne unique ou il peut s'agir d'un ou plusieurs objets JavaScript.

```javascript 
console.log('Hello World!');
```
Pour une utilisation de base, vous pouvez rendre un simple morceau de code exécutable. Pour cela, vous devez ajouter le mot - clé : `runnable`

````
```javascript runnable
console.log('Hello World!');
```
````

```javascript runnable
console.log('Hello World!');
```
Nous pouvons aussi aussocier du code Javascript dans une page HTML. 

````
```javascript
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Vous avez cliqué !';
  document.body.appendChild(para);
}
```
````
Pour afficher un morceau de code en HTML, nous utilisons la syntaxe suivante :

````
```html
<button onclick="createParagraph()">Cliquez-moi!</button>
```
````
Et voici l'interface dans la console tech.io.

```javascript

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Hello Word!';
  document.body.appendChild(para);
}
```
```html 
<button onclick="createParagraph()">Cliquez-moi!</button>
</div>
```

Pour pouvoir faire le test dans la même page, nous rajoutons la balise `<script>` en HTML.


```html runnable
<script>
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Hello Word !';
  document.body.appendChild(para);
}
</script>
<button onclick="createParagraph()">Cliquez-moi!</button>
</div>

```
Dans la pratique, il vaut mieux écrire le code Javascript dans un autre fichier. 
```javascript
<script src="javascript.js"></script>
```

