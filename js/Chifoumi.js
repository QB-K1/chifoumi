'use strict';

var joueur = window.prompt("Pierre, Feuille ou Ciseau ?");

var ordinateur = Math.round(Math.random()*2);

/*Math.random permet de sortir un nombre aléatoire compris entre [0 et 1[. Math.round permet d'arrondir à l'entier le plus proche*/

joueur = joueur.toLowerCase();/*Permet à la saisie du texte d'etre en minuscule, meme si le joueur met des majuscule*/

console.log(joueur);



switch (ordinateur)

{

	case 0: ordinateur="Pierre";

	case 0: document.write("<p>L'ordinateur à choisi la Pierre</p>");

	break;

	case 1: ordinateur="Feuille";

	case 1: document.write("<p>L'ordinateur à choisi la Feuille</p>");

	break;

	case 2: ordinateur="Ciseau";

	case 2: document.write("<p>L'ordinateur à choisi le Ciseau</p>");

	break;

}

console.log(ordinateur);



if (joueur == "pierre")

{

	if (ordinateur == "Pierre")

	{

		document.write("<p>Egalité !</p>");

	} else if (ordinateur == "Feuille")

	{

		document.write("<p>Perdu !</p>");

	} else if (ordinateur == "Ciseau")

	{

		document.write("<p>Gagné !</p>");

	}

} else if (joueur == "feuille")

{

	if (ordinateur == "Feuille")

	{

		document.write("<p>Egalité !</p>");

	} else if (ordinateur == "Ciseau")

	{

		document.write("<p>Perdu !</p>");

	} else if (ordinateur == "Pierre")

	{

		document.write("<p>Gagné !</p>");

	}

} else if (joueur == "ciseau")

{

	if (ordinateur == "Ciseau")

	{

		document.write("<p>Egalité !<P>");

	} else if (ordinateur == "Pierre")

	{

		document.write("<p>Perdu !</p>");

	} else if (ordinateur == "Feuille")

	{

		document.write("<p>Gagné !</p>");

	}

} else {

	document.write("OHOOH ! On joue à pierre feuille ciseau !");

}

