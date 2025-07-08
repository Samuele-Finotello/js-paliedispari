//Palindroma
//definizione variabili
const parola = prompt('Inserisci una parola');

function Palindroma() {
  let minuscola = parola.toLowerCase();
  let reversed = [];
  for (let i = minuscola.length - 1; i >= 0; i--) {
    reversed.push(minuscola[i]);
  }
  let check = minuscola.split("");
  if (reversed.toString() === check.toString()) {
    console.log(`La parola "${parola}" e' palindroma:\n${check}\n${reversed}`)
  }
  else {
    console.log(`La parola "${parola}" non e' palindroma:\n${check}\n${reversed}`)
  }
}
Palindroma();

//Pari o dispari
//definizione variabili
const scelta = prompt('Scegli pari o dispari');
const numUser = parseInt(prompt('Scegli un numero da 1 a 5'));