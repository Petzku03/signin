// Esim 1. Otetaan esimerkkina henkilo-olio

let henkilo = {
    etunimi:'Leila',    // Etunimi on avain ja 'leila' on arvo
    sukunimi:'Hökki',
};

// Tulostetaan henkilo-olion tedot 2 eri tavalla

console.log(`${henkilo.etunimi} ${henkilo.sukunimi}`);
console.log(`${henkilo['etunimi']} ${henkilo['sukunimi']}`);

// Esim 2. Olioon voidaan lisätä myös funktio (metodi)

let asiakas = {
    numero: 100,
    etunimi: 'Arvid',
    sukunimi: 'Lee',
    tulostaAsiakastiedot(){
        return `Asiakkaan ${this.numero} nimi on  ${this.etunimi} ${this.sukunimi}`;
    }
}

// Tulostetaan asiakkaan tiedot

console.log(asiakas.tulostaAsiakastiedot());

// Esim 3. Oliossa voi olla myös taulukko

let henkilo2 = {
    etunimi: 'Pirkko',
    sukunimi: 'Puro',
    puhelin: [                       // Puhelin on taulukko, josssa on 2 alkiota
        {'tyyppi':'työ'},
        {'numero':'050-6745876'}
    ],
    tulostaPuhelintiedot(){
        return`${this.etunimi} ${this.sukunimi} puhelinnumero on ${this.puhelin[1].numero}`
    }
};

// Tulostetaan Henkilön Pirkko puhelinnumero
console.log(henkilo2.tulostaPuhelintiedot());

// Esim 4. Olio ja oma metodi

function haeHenkilo(){
    let henkilo3 = {
        etunimi: 'Arwid',
        sukunimi: 'Lee',
        puhelin: [
            {'tyyppi':'koti'},
            {'numero':'050-5475869'},
        ],
        tulostaPuhelintiedot(){
            return`${this.etunimi} ${this.sukunimi} puhelinnumero kotiin on ${this.puhelin[1].numero}`;
        }
    };
    return henkilo3;
}

// Tulostetaan Arwidin kotinumero
let arwidlee = haeHenkilo();
console.log(arwidlee.tulostaPuhelintiedot());
console.log(arwidlee.sukunimi);