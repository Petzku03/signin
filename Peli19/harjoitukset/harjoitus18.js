/*
// Teht 1

let tutkittavaLuku=process.argv[2];
let tutkittavaLuku2=process.argv[3];

   
if (tutkittavaLuku % tutkittavaLuku2 == 0) {
console.log(`Luku ${tutkittavaLuku} on jaollinen luvulla ${tutkittavaLuku2}`);
} else{

    console.log(`Luku ${tutkittavaLuku} ei ole jaollinen luvulla ${tutkittavaLuku2}`);
}


// Teht 2


function Muunnin(Farenheit) 
{
  var fAste = Farenheit;
  var fareCelsius = (fAste - 32) * 5 / 9;
  var message = fAste+'\xB0F on ' + fareCelsius + '\xB0C.';
    console.log(message);
} 
Muunnin(32);


// Teht 3

let tag=process.argv[4]; 
if (tag == `Jäätelö`) {
    console.log(`${tag} pitää kujettaa kylmälaukussa`); 
}else if (tag == `Maito`) {
    console.log(`${tag} pitää kujettaa kylmälaukussa`);
}else if (tag == `Kerma`) {
    console.log(`${tag} pitää kujettaa kylmälaukussa`);
}else if (tag == `Jauheliha`){
    console.log(`${tag} pitää kujettaa kylmälaukussa`);
}else if (tag == `Ruisleipä`){
    console.log(`${tag} voidaan kuljettaa kassissa`);
}else if (tag == `Karkkipussi`){
    console.log(`${tag} voidaan kuljettaa kassissa`);
}else if (tag == `Omena`){
    console.log(`${tag} voidaan kuljettaa kassissa`);
}else if (tag == `Peruna`){
    console.log(`${tag} voidaan kuljettaa kassissa`);
}


// Teht 4


let _nimi=process.argv[2];
let empty=console.log("");
function Hampurilainen(_nimi) {
    if (_nimi == 'tavallinen') {
        console.log('Tavallinen maksaa 1€');
    }else if (_nimi == 'kerros') {
        console.log('Kerros maksaa 2€')
    }else if (_nimi == 'Kasvis') {
        console.log('Kasvis maksaa 1.50€')
    }else if (_nimi == empty) {
        console.log('Et valinnut hampurilaista')
    }else {
        console.log(_nimi + ' ei ole valikoimassa')
    }
}

console.log(Hampurilainen(_nimi));



// Teht 5

let _juoma = process.argv[2];
switch (_juoma) {
    
    case "appelsiinipore":
        console.log(`Appelsiiniporeen hinta on 2€ `)
        break;
    case "kolajuoma":
        console.log(`Kolajuoman hinta on 2.40€ `)
        break;
    case "kuplavesi":
        console.log(`Kuplaveden hinta on 1.50€ `)
        break;
    case "vesi":
        console.log(`Veden hinta on 0.50€ `)
        break;
    case null:
        console.log('Et valinnut juomaa')
        break;
    default:
        console.log(_juoma + ` ei ole valikoimassa`);
}
*/

// Luokkana toteutettavat

// Teht 1

class Taulukko{
    constructor(_numerot){
        this.numerot = _numerot;
    }
    tulostaLuvut(_numerot){
        return `${this.numerot}`
    
    }
    
}
let numerot = new Taulukko([1,10,2,7,20,3,10,90,37]);
console.log(numerot.tulostaLuvut());


