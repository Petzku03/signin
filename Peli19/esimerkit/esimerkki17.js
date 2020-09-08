/*
    Taulukot
*/

// Taulukon alustus
//  i:0 1 2 3
numerot = [1,2,3,4];

// Lasketaan taulukossa olevien lukujen summa: 1 + 2 + 3+ 4 = 10 (tarkista laskimella)
let summa = 0;
// Lasketaan summa for-silmukan avulla
for (let i = 0; i < numerot.length; i++) {
    summa += numerot[i];
}
// Tulostetaan summa
console.log(summa);