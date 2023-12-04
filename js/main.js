// // opdracht 1
// const woordenlijst = ["computer", "programmeren", "python", "taal", "spel"];

// const teRadenWoord = woordenlijst[Math.floor(Math.random() * woordenlijst.length)];

// console.log("Welkom bij het woordraadspel!");
// console.log("Ik heb een woord in gedachten. Raad welk woord het is.");
// console.log("Typ 'quit' om te stoppen.");

// const geraden = false;

// while (!geraden) {
//     const poging = prompt("Raad het woord: ").toLowerCase();

//     if (poging === "quit") {
//         console.log("Bedankt voor het spelen. Het woord was: '" + teRadenWoord + "'.");
//         break;
//     }

//     if (poging === teRadenWoord) {
//         geraden = true;
//         console.log("Gefeliciteerd! Je hebt het woord geraden: '" + teRadenWoord + "'.");
//     } else {
//         console.log("Helaas, dat is niet het juiste woord. Probeer het opnieuw.");
//     }
// }

// opdracht 3

// const temperaturen = [
 [ 3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2,
];

// Vind de warmste temperatuur
const warmste = Math.max(...temperaturen);
console.log("De warmste temperatuur is: " + warmste);

// Vind de koudste temperatuur
const koudste = Math.min(...temperaturen);
console.log("De koudste temperatuur is: " + koudste);

// Filter temperaturen boven de 10 graden
const bovenTien = temperaturen.filter((temp) => temp > 10);
console.log("Temperaturen boven de 10 graden zijn: " + bovenTien.join(", "));

// // opdracht 4

// let weather = document.querySelector(".weather");

// const weatherList = [
//   { month: "januari", temperature: 3.6 },

//   { month: "februari", temperature: 3.9 },

//   { month: "maart", temperature: 6.5 },

//   { month: "april", temperature: 9.9 },

//   { month: "mei", temperature: 13.4 },

//   { month: "juni", temperature: 16.2 },

//   { month: "juli", temperature: 18.3 },

//   { month: "augustus", temperature: 17.9 },

//   { month: "oktober", temperature: 14.7 },

//   { month: "september", temperature: 10.9 },

//   { month: "november", temperature: 7 },

//   { month: "december", temperature: 4.2 },
// ];

// console.log(weatherList);
