let tutkittavaLuku=process.argv[2];

let otsikko= 'HARJOITUS 2';
console.log(`#### ${otsikko} ####`);

// Onko tutkittava luku suurempi kuin nolla?
if (tutkittavaLuku > 0) {
    //Totuushaara
    console.log(`Antamasi luku ${tutkittavaLuku} oli positiivinen`);
}
// Onko tutkittava luku pienempi kuin nolla?
else if(tutkittavaLuku < 0){
    // Totuushaara
        console.log(`Antamasi luku ${tutkittavaLuku} oli negatiivinen`);
}else{
    // Epätosihaara
    console.log(`Antamasi luku ${tutkittavaLuku} oli nolla`);
}

// VERTAA HARJOITUKSEEN 1 