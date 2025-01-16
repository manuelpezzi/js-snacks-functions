/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str) {
    const vocali = "aeiouAEIOU"
    let conta = 0;
    for (let i = 0; i < str.length; i++) {

        for (let f = 0; f < vocali.length; f++) {
            if (str[i] === vocali[f]) {
                conta++;
            }
        }
    }
    return conta;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)