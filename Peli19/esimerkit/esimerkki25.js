/*
    Olioista käsitteeseen luokka (class). Jos samanlaisia olioita tarvitaan useita niin silloin oliosta kannattaa tehdä luokkia.
    Luokka muistuttaa kovasti tietokannan käsitettä (entity)
*/

// Muutetaan asiakas-olio luokaksi
class Henkilo{
    // Alustjaksi. ALustaja alustaa käytettävät ominaisuudet
    constructor(_numero, _etunimi, _sukunimi){
        this.numero = _numero;
        this.etunimi = _etunimi;
        this.sukunimi = _sukunimi;
    }
    // Metodi joka tulostaa
    tulostaHenkilotiedot(){
        return `Henkilön ${this.numero} nimi on ${this.etunimi} ${this.sukunimi}`;
    }
};  // Henkilo-luokka päättyy

//  Luodaan luokasta Henkilo olio (Arwid Lee)
let arwid = new Henkilo(100, 'Arwid', 'Lee');
//  Tulostetaan Arwid Leen tiedot
console.log(arwid.tulostaHenkilotiedot());

//  Luodaan HEnkilo luokasta olio (Pirkko Puro)
let pirkko = new Henkilo(101, 'Pirkko', 'Puro');
console.log(pirkko.tulostaHenkilotiedot());

// Luodaan Henkilo luokasta olio (Elmeri Rytel)
let elmeri = new Henkilo(102, 'Elmeri', 'Rytel');
console.log(elmeri.tulostaHenkilotiedot());