//Palindroma
//definizione variabili
const parola = prompt('Inserisci una parola');

function Palindroma() {
  let minuscola = parola.toLowerCase();
  let reversed = [];
  for (let i = minuscola.length - 1; i >= 0; i--) {
    reversed.push(minuscola[i]);
  }
}
Palindroma();