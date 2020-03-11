// // alert("Hello Dolly!");

// // console.log("Bonjour"); affiche dans la console de l'inspecteur du navigateur

// // type string
// var foo ="ceci est une string";

// // type number
// var bar = 5;

// // type bolean
// var bool = true;
// var bool = false;

// // type undefined
// var nomdemavariable;
// // on ne lui a pas assigné de valeur pour l'instant

// // type null
// var variable = null
// // elle ne contient rien 

// // type array
// var tableau1 = ["red","orange", "blue"];

// // type objet
// var objetType = { 
//     "Nom" : "Quenette",
//     "Prénom" : "Aurélie",
//     "Age" : "35"
// }
// // type function
// var variableDeTypeFonction = function(){
//     return('string returnée')
// }

// console.log(tableau1);
// pour vérifier le type de la variable , on fait console.log(typeof nom)


// var header = document.getElementsByTagName('html')
// var selectionParClasse = document.getElementsByClassName('jumbotron');
// var nImporteQuoi = document.getElementById('id_test');
// console.log(nImporteQuoi);

// var gloubiboulga = document.createElement("div");
// document.body.appendChild(gloubiboulga);
// gloubiboulga.classList.add('foo','bar');


// console.log(gloubiboulga.classList)

document.getElementById('burger_img').onclick = function() {
    // console.log('b;pbf;gp')
    document.getElementById('main_nav').classList.toggle('show');
}