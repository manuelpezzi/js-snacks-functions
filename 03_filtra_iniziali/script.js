/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = "A";

// Dichiara la funzione qui.
function filtroParolePerLettera(names, lettera) {
    const risulato = [];


    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toUpperCase() === lettera.toUpperCase()) {
            risulato.push(names[i]);
        }
    }
    return risulato;
}

// Invoca la funzione qui e stampa il risultato in console

const risulato = filtroParolePerLettera(names, lettera);
console.log(risulato)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]