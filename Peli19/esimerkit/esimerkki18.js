/*
    Taulukot
*/

// Taulukon alustus
//  i:0 1 2 3
numerot = [1,2,3,4];

// Lisätään taulukkoon luku 5. Push-komento lisää luvun taulukon loppuun.
numerot.push(5);
numerot.push(8);

// Poistetaan taulukon lopusta luku.
numerot.pop();
numerot.pop();
numerot.pop();

// Korvataan taulukon luku toisella luvulla
numerot[1] = 3;

// Tulostetaan taulukon luvut allekkain.
for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}