/*
    For-silmukka
    Muutetaan esimerkin 14 koodia niin, että myös merkkien ja rivien lukumäärä saadaan syötteenä.
*/

let merkki = process.argv[2];
let rivit = process.argv[3];
let sarakkeet = process.argv[4];

let kuvio = '';

// Uloin silmukka
for (let j = 0; j < rivit; j++) {
    // Sisempi silmukka
    for (let i = 0; i < sarakkeet; i++) {
        kuvio += merkki;

    } 
    // Rivien vaihto
    kuvio += '\n';
}
console.log(kuvio);