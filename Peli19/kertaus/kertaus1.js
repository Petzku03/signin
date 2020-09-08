// Kertaus 1.
function TarkistaParillisuus(_luku) {
    if (_luku%2 == 0) {
        return true;
    } else {
        return false;
    }
}
let pariVaiEi = TarkistaParillisuus(_luku=process.argv[2]);
console.log(pariVaiEi);

// Kertaus 2.

 function tulostaLampotila(_lampoaste){
    if (lampotila < -25) {
        console.log("Kova pakkenen");
    } else if (lampotila < -10) {
        return ("Pakkanen")
    } else if (lampotila < 0) {
        return ("Pikkupakkanen")
    } else if (lampotila < 25) {
        return ("Lämmintä")
    } else if (lampotila > 25) {
        return ("Helle tai kuuma")
    }
}

let lampoaste = tulostaLampotila(lampotila=process.argv[2]);
console.log(lampoaste);


// Kertaus 3.


const numerot = [1, 2, 3, 4, 5];

function Saakeskiarvo(numerot) {
  const Arvo = numerot.reduce((acc, c) => acc + c, 0);
  return Arvo / numerot.length;
}

const keskiarvo = Saakeskiarvo(numerot);
console.log(keskiarvo);




