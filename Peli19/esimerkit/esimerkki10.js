/*
    Alkuehtoinen while-silmukka
    esimerkissä tulostetaan MAX kertaa sana Hei! Maksimi määrä saadaan syötteenä.
*/

// Nimetty vakio MAX ssaa arvonsa komentoriviltä
const MAX = process.argv[2];
// Laskuri k alustetaan
let k = 0;

// Silmukkaa suoritetaan kunnes k => MAX
while(k < MAX ) {
    console.log("Hei");
    k++;
} 

// Tänne hypätään kun k < MAX ei ole totta

/*
    Nimetyt vakiot ovat muuttujia, joiden arvoa ei voi enää ensimmäisen sijoituskerran jälkeen
    muuttaa. Tämä ilmoitetaan const -määritteellä
*/