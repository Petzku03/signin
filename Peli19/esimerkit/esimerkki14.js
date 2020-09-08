/*
    For-silmukka.
    Muutetaan esimerkin 13 koodia niin, että kuviossa oleva merkki saadaan syötteenä.
*/

let merkki = process.argv[2];
let nelio2 = '';
// Uloin silmukka
for (let j = 0; j < 4; j++) {
    // Sisempi silmukka
    for (let i = 0; i < 4; i++) {
        nelio2 += merkki;
    }
    // Rivin vaihto
    nelio2 += '\n';
}
console.log(nelio2);