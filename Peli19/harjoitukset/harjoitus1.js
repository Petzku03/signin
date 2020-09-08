// tällä saadaan syöte komentoriviltä 
let tutkittavaLuku=process.argv[2];

let otsikko='HARJOITUS 1';
console.log(`#### ${otsikko} ####`);    // Huomaa miten voidaan muuttujan sisältö voidaan tulosta merkkijonon sisään! Huomio oikeat hipsut ``

// Onko tutkittava luku suurempi tai yhtäsuuri kuin nolla?
if (tutkittavaLuku >= 0) {
    //totuushaara
console.log(`Antamasi luku ${tutkittavaLuku} oli positiivinen tai nolla`);
}else{
    // Epätosihaara
    console.log(`Antamasi luku ${tutkittavaLuku} oli negatiivinen`);
}

