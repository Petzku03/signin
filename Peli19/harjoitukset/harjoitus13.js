// 1. Koodaa metodi joka tulostaa henkilön koko nime, Etu- ja sukunimen välitetään parametreinä.

function tulostaNimi(_etunimi, _sukunimi) {
    console.log(`${_etunimi} ${_sukunimi}`);
}

// Funktiokutsu

tulostaNimi('Petteri', 'Kivi');

// 2.   Koodaa metodi summa(a, b), jossa a ja b ovat kokonaislukuja. Metodi laskee luvut a ja b yhteen ja tulostaa niiden summan.

function summa(a,b){
    console.log(a,b);
}

// Funktiokutsu
summa(4,5);

// 3.   Koodaa metodi joka saa parametrinä auton rekisterinumeron ja palauttaa sen isoina kirjaimina kutsujalle. 
//      (esim. abv-123 palautuu ABC-123)

function muutaRekisterinumero(_rekisterinumero){
    return _rekisterinumero.toUpperCase();
}

// Funktiokutsu
let uusiRekisterinumero = muutaRekisterinumero('abc-123');
console.log(uusiRekisterinumero);

// 4. Koodaa metodi joka vertailee kahta parametrinä annettua arvoa luku1 ja luku2
// ja palauttaa joko arvon -1, 0 tai 1 seuraavien ehtojen mukaisesti
// jos luku1 < luku2 palautuu -1
// jos luku1 > luku2 palautuu 1
// Muussa tapauksessa palautuu 0

function vertaile(_luku1, _luku2) {
    if (_luku1 < _luku2) {
        return -1;
    }else if (_luku1 > _luku2) {
        return 1;
    }else{
        return 0;
    }
    
}

// Funktiokutsu
let tulos = vertaile(5,5);
console.log(tulos);

// 5. Koodaa metodi joka palauttaa parametrinä saadun tekstin merkkien lukumäärän.
// Käytä hyväksi merkkijonon length-ominaisuutta.

function merkkienLukumaara(_teksti){
    return _teksti.length;
}

// Funktiokutsu

let lukumaara = merkkienLukumaara('lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas');
console.log(lukumaara);

// 6. Koodaa medoti, joka tulostaa rivin merkkejä. Merkkien lukumäärä ja tulostettava merkki
// Välitetään parametrina.

function tulostaMerkkirivi(_lukumaara, _merkki){
    let vaakarivi = '';
 for (let i = 0; i < _lukumaara; i++) {
     vaakarivi += _merkki

    }   
    console.log(vaakarivi);
}

//Funktiokutsu

tulostaMerkkirivi(1, 'e');

// 7.   Koodaa metodi, joka laskee parametrina saadusta tekstista Saippuakauppias a-kirjainten lukumäärän ja
//      palauttaa lukumäärän kutsujalle.

function kirjaintenLukumaara(_teksti){
    let lukumaara = 0;
    for (let i = 0; i < _teksti.length; i++) {
        if (_teksti[i] == 'a'){
            lukumaara++;
        }
    }
    return lukumaara;
}
// Funktiokutsu
let a_kirjaimia = kirjaintenLukumaara('saippuakauppias');
console.log(a_kirjaimia);

// 8.   Koodaa metodi alennaHintaa, joka saa parametrinä hinnan ja laskee sille 10% alennuksen ja palauttaa
//      alennetun hinnan ktsujalle. ALennuksen voi laskea kaavasta uusihinta = 0.9 * vanhahinta.

function alennaHintaa(_vanhahinta){
    return 0.9 * _vanhahinta;
}

// Funktiokutsu

let uusihinta = alennaHintaa(100);
console.log(`10% 100 on ${uusihinta}`);

// 9.

let health = 1;
function TakeDamage(){
    health--;
    if (health <= 0){
        return 'Vihollinen delas';
    }
}

// Funktiokutsu
let vihollisenTila = TakeDamage();
console.log(vihollisenTila);