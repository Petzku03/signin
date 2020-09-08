/*
    Merkkijonojen käsittely.
    Merkkijono talletetaan taulukkoon. Muista että taulukon 1. indeksi on 0.
        indeksi:    012345678
        merkkijono: Datanomi!

    Funktio (metodi) on muotoa:
    function_nimi(parametrilista) {
        funkiton toteutus tulee tähän ...
    }
*/

function showMessage(){
    console.log("Ohjelmointi on kivaa.");
}

// Kutsutaan metodia showMessage
showMessage();
showMessage();

// Suoritetaan viesti
for (let index = 0; index < 5; index++) {
    showMessage();
}