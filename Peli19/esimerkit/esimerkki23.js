// Jatketaan merkkijonoilla ja funktioilla

// Harjoitus 1. Tee metodi, joka tarkistaa alkaako merkkijono 'kuvagalleria.png' merkkijonolla 'kuva'.
// Jos alkaa niin palautuu true, muuten false. Merkkijono välitetään parametreinä.

function tarkistaMerkkijono(_merkkijono){
    if (_merkkijono.startsWith('kuva')) {
        return true;
    } else {
        return false;
    }
}

// Metodikutsu

let tarkistus = tarkistaMerkkijono('kuvagalleria.png');
console.log(tarkistus);


// Harjoitus 2. Metodi joka tarkistaa päättyykö merkkijono "kuvagalleria.png" merkkijonolla ".png".

function tarkistaMerkkijono2(_merkkijono2) {
    if (_merkkijono2.endsWith('.png')) {
        return true;
    } else {
        return false;
    }
}

// Metodikutsu

let tarkistus2 = tarkistaMerkkijono2('kuvagalleria.png');
console.log(tarkistus2);


// Harjoitus 3. Selivtä tietyn merkkijonon indeksi, josta se alkaa. Indeksi palautetaan kutsujalle.
//      teksti: 'ohjelmointi on kivaa puuhaa!'
//      Merkkijono: 'on'

function selvitaSijainti(_merkkijono, _sana) {
    return _merkkijono.indexOf(_sana);
}

// Metodikutsu

let indeksi = selvitaSijainti('Ohjelmointi on kivaa puuhaa!', 'kivaa');
console.log(indeksi);

// Mitä jos sanaa ei löydy merkkijonosta. Mitä palautuu?


// Harjoitus 4. Otetaan esimerkkinä titti web-osoite: cloud.businesscollege.fi
//              Tehdään metodi, joka poimii osoitteesta sanan businesscollege.
//              Apuna käytetään indexOf-, lastindexOf, sekä substring-metodeja.

function erotaSana(_teksti) {
    let alku = _teksti.indexOf('cloud.');       // alku = 0
    let loppu = _teksti.lastIndexOf('.fi');    // lopppu = 21
    return _teksti.substring(alku + 6, loppu);
}

// Metodikutsu
let sana = erotaSana('cloud.businesscollege.fi');
console.log(sana);


// Harjoitus 5. Tee metodi, joka palauttaa HTML-linkin kutsujalla.

function omaLinkki(_linkkisana, _linkki) {
    return _linkkisana.link(_linkki)
}

// Metodikutsu
let osoite = omaLinkki('siirry cloudiin', 'http://cloud.businesscollege.fi');
console.log(osoite);


// Harjoitus 6. Tee metodi, joka kääntää merkkijonon takaperin

function takaperin(_teksti) {
    return _teksti.split('').reverse().join('');
}

// Metodikutsu

let sanatakaperin = takaperin('Makkaraperunat');
console.log(sanatakaperin);


// harjoitus 7. Koodaa oma etsi ja korvaa metodi

function omaEtsiJaKorvaa(_teksti, _korvattava, _korvaava) {
    return _teksti.replace(_korvattava, _korvaava);
}

// Metodikutsu

let uusiTeksti = omaEtsiJaKorvaa('Makkaraperunat on pahaa', 'pahaa', 'parasta');
console.log(`Makkaraperunat on pahaa --> ${uusiTeksti}`);