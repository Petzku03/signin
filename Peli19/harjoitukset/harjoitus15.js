// Tehtävä 1

let matka = {
    tunnus:'123',    
    nimi:'Liikemaktka',
    kesto:'7',
    mjtunnus:'KOT',
    kotunnus:'PAR',
    hinta:'210',
    tulostaMatkatiedot(){
        return `Matkan nimi on ${this.nimi} ja matkan kesto on ${this.kesto}`;
    }
}
console.log(matka.tulostaMatkatiedot());

// Teht 2

let matkustaja = {
    tunnus: '33213',
    nimi: 'Laine Jari',
    katuos: 'Tellervonkatu 2',
    postinro: '55100',
    paikkakunta: 'Lappeenranta',
    puhelin: '050-6946612'
};

console.log(`${matkustaja.nimi}, ${matkustaja.paikkakunta}`);


// Teht 3

let lippu = {
    numero: '90112',
    pvm: '21.05.2020',
    astunnus: '5044',
    mattunnus: '123',
    tyyppi: 'Lento',
};

console.log(`${lippu.numero}, ${lippu.pvm}, ${lippu.tyyppi}, ${lippu.astunnus}`);



