/*
    Kaksiuloitteinen taulukko
*/

let taulukko2D = [
    [1, '\u2660', 3],
    [4, 5, '\u2660']
];

let tulos = '';
// Rivilaskuri
for (const rivi of taulukko2D) {
    // Merkkilaskuri
    for (const alkio of rivi) {
        tulos += alkio;
    }
    tulos += '\n';
}
console.log(tulos);