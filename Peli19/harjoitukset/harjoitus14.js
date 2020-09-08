// Tehtävä 1

function poistaValit(_teksti){
    string = '     ammukset';
    return string.trim();
}
let uusiTeksti = poistaValit();
console.log(uusiTeksti);


// Tehtävä 2


function tarkistaMerkkijono2(_merkkijono2, _tiedostopaate) {
    if (_merkkijono2.endsWith(_tiedostopaate)) {
        return true;
    }
     else {
        return false;
    }
}

// Metodikutsu

let tarkistus2 = tarkistaMerkkijono2('kuvagalleria.png', 'png');
console.log(tarkistus2);

// Tehtävä 3

function selvitaSijainti(merkkijono, sana) {
    if(merkkijono.indexOf(sana) < 0) {
        console.log("Sanaa ei löydy");
    } else {
        return merkkijono.indexOf(sana);
    }
}

let indeksi = selvitaSijainti('Ohjelmointi on kivaa puuhaa!', 'kivaa');
console.log(indeksi);

// Tehtävä 4
