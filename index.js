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
    let reduction = currentYear - birthYear;
    console.log(reduction);
    return reduction;
};


//DOM

// elementName.setAttribute ("value", "SELIM")

// let elementPrenom = document.querySelector ("#n2");
// elementPrenom.setAttribute ("value", "Thouaïbat")

// let elementAge = document.querySelector ("#age1");
// elementAge.setAttribute ("value", 22);

let elementYear = document.querySelector ("#year");



// elementYear.setAttribute ("value", "2002");

let elementValider = document.querySelector ("#bouton") ;
console.log (elementValider);

elementValider.addEventListener ("click", () => {
    console.log("Vous avez cliqué sur le bouton Valider.");
    let elementBirthyear = elementYear.value;

    
    // let anneeSaisie = elementBirthyear.value;
    console.log ("Année saisie:", elementBirthyear);
    
    diff (2024, elementBirthyear);
    
    let elementNom = document.querySelector ("#n1")
    console.log ("Nom saisi:", elementNomdef);
    let elementNomdef = elementNom.value;
    
})

   



