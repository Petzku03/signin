/*
    Loppuehtoinen while-silmukka
    Esimerkissä tulostetaan MAX kertaa sana Hei! Maksimi määrä saadaan syötteenä.
*/

const MAX = +process.argv[2];
let i = 0;

do {
    console.log('Peli19');
    i++;
}
// Silmukka suoritetaan kunnes i => koko
while( i < MAX);