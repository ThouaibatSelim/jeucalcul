// Règle validation formulaire

const elementFormulaire = document.querySelector("form");
    console.log(elementFormulaire)

//Récupérer

function verifierchamp(champ) {
    if(champ.value === "") {
        console.log("le champ nom est vide");
    } else {
        console.log("le champ nom est rempli");
    }
};

elementFormulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const elementInputNom = document.querySelector("#n1");
    const valueNom = elementInputNom.value;
    console.log("##### Nom saisi:", valueNom)
//Nom
    const elementInputPrenom = document.querySelector("#prenom");
    verifierchamp(elementInputNom);
    verifierchamp(elementInputPrenom);
});
