/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function trovaIniziali(nomeArrey) {
    const iniziali = [];
    for (let i = 0; i < nomeArrey.length; i++) {
        iniziali.push(nomeArrey[i].charAt(0).toUpperCase())
    }
    return iniziali
}

// Invoca la funzione qui e stampa il risultato in console
const iniziali = trovaIniziali(names)
console.log(iniziali)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]