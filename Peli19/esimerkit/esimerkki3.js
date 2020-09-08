/*
    Pelikorttien maat ja symbolit.
    Harjoitellaan lisää valintarakenteen käyttöä. MErkki \u tarkoittaa unicode-koodattua merkkiä

    Maat ja sybolit ovat:
        Pata    = \u2660
        risti   = \u2663
        hertta  = \u2665
        ruutu   = \u2666

    Tee if-else-if rakennem joka tutkii mitä maata valittiin ja tulostaa sitä vastaavan graafisen symbolin,
*/

// Talletetaan muuttujaan komentorivilta tullut syöte
let maa = process.argv[2];

// Määritellään muuttuja, jonka avulla maan symboli tulostetaan
let symboli;

// Onko kyseessä pata?
if(maa === 'pata') {
    // Kyllä on, niin sijoitetaan pataa vastaava symboli muuttujaan
    symboli = '\u2660';
}else if(maa === 'risti') {
    symboli='\u2663';
}else if(maa === 'hertta') {
    symboli='\u2665';
}else if(maa === 'ruutu') {
    symboli='\u2666';
}

// Tulostetaan maata vastaava symboli
console.log(symboli);