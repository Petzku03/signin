/*
    Luokka Lampotila, jossa kaksi metodia:
        - muunnaFranheit()
        - muunnaKelvin()

    Kaavat:
            - Farenheit: F = C * 1.8 + 32
            - Kelvin: K = C + 273.15
*/

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});


class Lampotila{
    constructor(_celsius){
        this.celsiusasteet = _celsius;
    }

    muunnaFarenheit(){
        return this.celsiusasteet * 1.8 + 32;
    }

    muunnaKelvin(){
        return Number(this.celsiusasteet) + 273.15;
    }
}   // Luokka päättyy

// Luodaan olio luokasta Lampotila
// var lampotila = new Lampotila(21);
// console.log('Farenheit: ' + lampotila.muunnaFarenheit().toFixed(2));
// console.log('Kelvin: ' + lampotila.muunnaKelvin());

rl.question('1. Kelvin\n2. Farenheit\n', (userInput)=>{
    if (userInput == 1) {
        rl.setPrompt('Syötä celsiusasteet \n');
        rl.prompt();
        rl.on('line', (UserInput)=>{
            var lampotila = new Lampotila(UserInput);
            console.log('Kelvinasteet: ' + lampotila.muunnaKelvin());
            // Tapahtuma kutsu
            rl.close();
        });
    }
    if (userInput == 2) {
        rl.setPrompt('Syötä celsiusasteet \n');
        rl.prompt();
        rl.on('line', (UserInput)=>{
            var lampotila = new Lampotila(UserInput);
            console.log('Farenheitasteet: ' + lampotila.muunnaFarenheit());
            // Tapahtuma kutsu
            rl.close();
        });
    }
});

// Close tapahtuma
rl.on('close', ()=>{
    console.log('Sovelluksen suoritus päättyy!');
});