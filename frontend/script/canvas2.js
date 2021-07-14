var canvas2 = document.getElementById("canvas2");
//on va lier le script avec GetContext
var contexte = canvas2.getContext("2d");
//on rempli le context (2d) avec fill(remplir) et Rect(un rectangle)
contexte.fillRect(30, 30, 100, 50)//on donne des coordonnées sur X et Y puis en largeur et en hauteur