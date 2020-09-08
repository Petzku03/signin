    
// 1.

class matka{
    constructor(_tunnus, _nimi, _kesto, _mjtunnus, _kotunnus, _hinta){
        this.tunnus = _tunnus;
        this.nimi = _nimi;
        this.kesto = _kesto;
        this.mjtunnus = _mjtunnus;
        this.kotunnus = _kotunnus;
        this.hinta = _hinta;
    }
    tulostaMatkatiedot(){
        return `Matkan tunnus on ${this.tunnus}, nimi ${this.nimi}, kesto ${this.kesto} tuntia, mjtunnus ${this.mjtunnus}, kotunnnus ${this.kotunnus}, hinta ${this.hinta} `;
    }
};

let matka1 = new matka('123', 'Liikematka', '7', 'KOT', 'PAR', '210');
console.log(matka1.tulostaMatkatiedot());



// 2.

class matkustaja{
    constructor(_tunnus2, _nimi2, _katuos2, _postinro2, _paikkakunta2, _puhelin2){
        this.tunnus2 = _tunnus2;
        this.nimi2 = _nimi2;
        this.katuos2 = _katuos2;
        this.postinro2 = _postinro2;
        this.paikkakunta2 = _paikkakunta2;
        this.puhelin2 = _puhelin2;

    }
    tulostaMatkustajatiedot(){
        return `Matkustajan tunnus ${this.tunnus2}, nimi ${this.nimi2}, katuosoite ${this.katuos2}, postinumero ${this.postinro2}, paikkakunta ${this.paikkakunta2} ja puhelinnumero ${this.puhelin2}`;
    }
};

let matkustaja1 = new matkustaja('33213', 'Jari Laine', 'Tellervonkatu2', '55100', 'Lappeenranta', '050-6946612');
console.log(matkustaja1.tulostaMatkustajatiedot());

// 3.

class lippu{
    constructor(_numero3, _pvm3, _astunnus3, _matunnus3, _tyyppi3){
        this.numero3 = _numero3;
        this.pvm3 = _pvm3;
        this.astunnus3 = _astunnus3;
        this.matunnus3 = _matunnus3;
        this.tyyppi3 = _tyyppi3;
    }
    tulostaLipputiedot(){
        return `Lipun numero on ${this.numero3}, paivamaara ${this.pvm3}, astunnus ${this.astunnus3}, matunnus ${this.matunnus3} ja tyyppi ${this.tyyppi3}`;
        }
};

let lippu1 = new lippu('90112', '21.05.2020', '5044', '123', 'Lento');
console.log(lippu1.tulostaLipputiedot());