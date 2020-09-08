/*
    Koodaa ohjelma, joka tutkii kahta lukua ja tutkii kumpi on suurepmi.
*/

// Luvut saadaan komentoriviltä
let luku1 = process.argv[2];
let luku2 = process.argv[3];

// TUtkitaan kumpi luvuista on suurempi
if (luku1 > luku2) {
    console.log(`Luku ${luku1} on suurempi kuin luku ${luku2}`);
}else if(luku1 < luku2){
    console.log(`Luku ${luku2} on suurempi kuin luku ${luku1}`);
}