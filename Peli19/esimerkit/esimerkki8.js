/*
    switch-lause on monivalintarakenne, jolla voi korvata joissakin tilanteissa
    if-else-if-rakenteen.

    vertaa esimerkkiin 3.
*/

//talletetaan muuttujaan komentorivilta tullut syöte.
let maa = process.argv[2];
// Tutkaan mikä maa on kyseessä. Muutetaan maa pieniksi kirjaimiksi vertailun helpottamiseksi.
switch(maa.toLowerCase()) {
    case 'hertta':
        console.log('\u2665');
        break;
    case 'pata':
        console.log('\u2660');
        break;
    case 'ruutu':
        console.log('\u2666');
        break;
    case 'risti':
        console.log('\u2663');
        break;
        default:
            console.log("antamasi maata ei ole.");
}   // switch-lause päättyy

// Tänne hypätään break-lauseesta