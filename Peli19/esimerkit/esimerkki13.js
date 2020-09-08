/* 
    For-silmukka
    Halutaan saada alla oleva tähtineliö:
        ****
        ****
        ****
        ****
    Tähtineliössä on 4 riviä ja joka rivillä on 4 tähteä? miten koodataan?
*/

// Mitä tämä tekee?
for (let i = 0; i < 4; i++) {
    console.log("*");
}

// Tänne hypätään kun i >= 4
let nelio ='';
// Tulostetaan 4 tähteä, mutta vaakatasossa
for (let i = 0; i < 4; i++) {
    // Tähdet kerätään merkkijono-taulukkoon: nelio = {'*', '*', '*', '*',}
    nelio += '*';
}
// Tulostetaan tähdet
console.log(nelio);

/*
    Miten saadaan 4 riviä?
    Jos katsotaan esimerkkiä, niin huomataan että tähdet muodostavat kaksiulotteisen taulukon,
    jossa on 4 saraketta ja 4 riviä (4 x 4 taulukko).
*/

let nelio2 = '';
// Uloin silmukka
for (let j = 0; j < 4 ; j++) {
        // Sisempi silmukka
    for (let i = 0; i < 4; i++) {
        nelio2 +='*';
    }
    // Rivin vaihto
    nelio2 += '\n'; // nelio2 = {'*', '*', '*', '*', \n, '*', '*', '*', '*', }
}
console.log(nelio2);