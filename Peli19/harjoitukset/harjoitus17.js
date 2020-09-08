
// Teht 1

class auto {
    constructor(_bensatankkiTilavuus, _bensaMaara, _nopeus, _merkki, _malli){
        this.bensatankkiTilavuus = _bensatankkiTilavuus;
        this.bensaMaara = _bensaMaara;
        this.nopeus = _nopeus;
        this.merkki = _merkki;
        this.malli = _malli;
    }
    lisaaBensaa(){
        this.bensaMaara++;
    };
    naytaBensanMaara(){
        return `Bensan määrä tankissa ${this.bensaMaara}`;
    };
    kaynnistys(){
        return `Auto käynnissä`;
    };
    aja(){
        return`Auto ajossa`;
    };
    
}

let auto1 = new auto('52','50', '250', 'Volvo', 'Volvo v40');
console.log(auto1.naytaBensanMaara());


// Teht 2

class Matikka{
    constructor(_kanta, _sade, _korkeus){
        this.kanta = _kanta;
        this.sade = _sade;
        this.korkeus = _korkeus;
    }

KolmionPintaala(){
    return ((this.kanta * this.korkeus) / 2).toFixed(1);
}

ympyränPintaala() {
    return(Math.PI * Math.pow(this.sade, 2)).toFixed(1);
    }
}

let ratkaisu = new Matikka(5, 2, 2);
console.log(ratkaisu.KolmionPintaala());
console.log(ratkaisu.ympyränPintaala());



















// Teht 3

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

class Tahti{
    constructor(_tahtienLukumaara){
        this.tahtienLukumaara = _tahtienLukumaara;
    }

    tulostaTahdet(){
        let nelio = '';
        for (let i = 0; i < this.tahtienLukumaara; 1++) {
            nelio += '*';
        }
        console.log(nelio);
    }
}

rl.question('Syötä tahtien lukumäärä\n',(UserInput)=>{

});