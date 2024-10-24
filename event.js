// Les événements

const elementInputNom = document.querySelector("#n1");
console.log(elementInputNom);

//Change
elementInputNom.addEventListener("change", () => {
    console.log("=== J'ai entendu le change");
});

    const elementInputPrenom = document.querySelector("#prenom");
    console.log (elementInputPrenom);

    let messageBonj;
    const elementMessageBonjour = document.querySelector("#messageBonj");
    elementInputPrenom.addEventListener ("change", (event) =>{
    console.log("Le change est : ", event.target.value);
    messageBonj = `Bonjour ${event.target.value}`;
    elementMessageBonjour.textContent = messageBonj});

    function afficherSalutation() {
        const maintenant = new Date();
        const heure = maintenant.getHours();
        let salutation;

        if (heure < 12) {
            salutation = "Bonjour";
        } else {
            salutation = "Bonsoir";
        }

        document.querySelector("#jour").innerHTML = salutation;
    };

    console.log(afficherSalutation)

// Hour

// const hourday = document.querySelector("#jour")
// const elementHourDay = new Date();
// let time1 = elementHourDay.getHours();
// console.log("Il est:", time1, "h");

// const hournight = document.querySelector("#soir")
// const elementHourNight = new Date();
// let time2 = elementHourNight.getHours();

// function heure (time1, time2) {
// if (heure < 12) {
// return "Bonjour";
// } else if (heure > 12) {
//     return "Bonsoir";
// }
// };
// console.log (heure)
// });


// const time = new Date()
// let heure = time.getHours();
// document.querySelector("#jour")

// if (heure < 12) {
// return ("Bonjour");}
// else {
// return ("Bonsoir");
// }