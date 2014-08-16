changeBackground
=======================

Un plugin qui permet à un utilisateur de modifier l'image de fond de n'importe quel élément, et de sauvegarder ce choix sans base de données

#Utilisation

Appelez simplement la méthode <code>changeBackground()</code> sur un objet jQuery, qui sera un élément de formulaire de type "select".
```javascript
$('#change-background').changeBackground();
```

À côté de ça, votre sélecteur (dropdown) doit comporter un attribut data-image qui contient l'url de l'image de votre choix.

```html
<select id="change-background" class="select">
	<option value="star-wars" data-image="http://www.monsite.com/starwars.jpg">Star Wars</option>
	<option value="gta" data-image="http://www.monsite.com/gta.jpg">GTA</option>
	<option value="mario" data-image="http://www.monsite.com/mario.jpg">Mario</option>
	<option value="batman" data-image="http://www.monsite.com/batman.jpg">Batman</option>
</select>
```

#Options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Valeur par défaut</th>
			<th>Valeurs possibles</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>elem</th>
			<td>body</td>
			<td>Chaîne de caractères</td>
			<td>Définit l'élément sur lequel le background sera modifié</td>
		</tr>
	</tbody>
</table>

#Évolutions envisagées
* ??
