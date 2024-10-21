//Jeu de calcul

let année = 2024;


//Objet

let user = { 
nom: "SELIM",
prenom: "Thouaïbat",
naissance: 2002
} ;


// Fonction

let currentYear = 2024;
let birthYear = 2002;

function diff (currentYear, birthYear) {
    let reduction = currentYear - birthYear
    return reduction
};

let reduction = (2024 - 2002);

//Affichage
console.log (reduction);

//DOM

let elementName = document.querySelector ("#n1");
elementName.setAttribute ("value", "SELIM")

let elementPrenom = document.querySelector ("#n2");
elementPrenom.setAttribute ("value", "Thouaïbat")

let elementAge = document.querySelector ("#age1");
elementAge.setAttribute ("value", 22);

let elementYear = document.querySelector ("#year");
elementYear.setAttribute ("value", "2002");





