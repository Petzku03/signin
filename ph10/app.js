"use strict"
const btnLaske = document.querySelector("#btnLaske");

btnLaske.onclick = function() {
    const luku = document.querySelector("#luku").value;
    const tulos = document.querySelector("#tulos");
    if (luku >= 1 && luku <= 100) {
        if(luku % 3 == 0 && luku % 5 == 0) {
            tulos.innerHTML = "FizzBuzz";
        } else {
            tulos.innerHTML = luku;
        }
        } else {
            tulos.innerHTML = "syötä luku 1 ja 100 väliltä";
        }
        return false;
    }