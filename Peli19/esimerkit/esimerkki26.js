// muuta asiakas-olio Asiakas luokaksi
class Asiakas{
    //  Alustaja
    constructor(_etunimi, _sukunimi, _puhelin){
        this.etunimi = _etunimi;
        this.sukunimi = _sukunimi;
        this.puhelin = _puhelin;
    }
    //  Metodi joka tulostaa asiakkaan tiedot
    tulostaAsiakastiedot(){
        return `${this.etunimi} ${this.sukunimi} puhelinnumero on ${this.puhelin[1].numero}`;
    };
    // Metodi joka tulostaa asiakkaan puhelimen tyypin
    tulostaPuhelintyyppi(){
        return `${this.etunimi} ${this.sukunimi}, puhelimen tyyppi on ${this.puhelin[0].tyyppi}`;
    }
}   // Asiakas luokka päättyy

//  Olion (Pirkka Puro) luominen luokasta Asiakas
let pirkko = new Asiakas('Pirkko', 'Puro', [{'tyyppi':'työ'},{'numero':'050-4569876'}]);
console.log(pirkko.tulostaAsiakastiedot());
console.log(pirkko.tulostaPuhelintyyppi());

// Olion (Elmeri Rytel) luominen luokasta Asiakas
let elmeri = new Asiakas('Elmeri', 'Rytel', [{'tyyppi':'koti'},{'numero':'040-5694857'}]);
console.log(elmeri.tulostaPuhelintyyppi());

