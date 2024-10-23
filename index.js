//Jeu de calcul

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


// STOP RESET
document.querySelector("#bouton").addEventListener("click", function(event) {
    // Empêche le bouton de faire quoi que ce soit d'autre
    event.preventDefault();
    
});


// ///////////

let elementYear = document.querySelector ("#year");
let elementValider = document.querySelector ("#bouton") ;

console.log (elementValider);

//Evenement

elementValider.addEventListener ("click", () => {
    console.log("Vous avez cliqué sur le bouton Valider.");
    let elementBirthyear = elementYear.value;
    console.log ("Année saisie:", elementBirthyear);
    
   const age = diff (2024, elementBirthyear);

    //Nom
    let elementNom = document.querySelector ("#n1");
    let elementlastname = elementNom.value;
    console.log ("Nom saisi:", elementlastname);
    
    //Prénom
    let elementPrenom = document.querySelector ("#prenom");
    let elementFirstName = elementPrenom.value;
    console.log("Prénom saisi:", elementFirstName);
    
    //Span
    const elementSpan = document.querySelector("#messageage");
    elementSpan.innerHTML += ` Vous avez ${age} ans, `;

    if (age < 18) {
        elementSpan.innerHTML += "vous êtes mineur(e).";
    } else { elementSpan.innerHTML +="vous êtes majeur(e)";

    }

    //Situation
    const elementPro = document.querySelectorAll('input[name="situation"]');
    console.log(elementPro);

    let checked;
    for (let i = 0; i < elementPro.length ; i++) {

    if (elementPro[i].checked){
        console.log (elementPro[i].value);
        checked = elementPro[i].value;
        break
    };
};

elementSpan.innerHTML += ` et vous êtes ${checked}.`;
});

//Année
const date = new Date() ;
const elementDate = document.querySelector ("#currentyear");
elementDate.innerHTML += `Tous droits réservés ${date.getFullYear()} © `;

// console.log("date:", date);
// console.log("année:", date.getFullYear());


