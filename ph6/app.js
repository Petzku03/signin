"use strict"

const btnLaske = document.querySelector("#btnLaske");
const btnTyhjenna = document.querySelector("#btnTyhenna");
const Syota = document.querySelector("#Syota");
const Tulos = document.querySelector("#Tulos");

btnLaske.onclick = function() {
    if(Syota.value % 2 == 0 ) {
        Tulos.innerHTML = `luku ${Syota.value} on parillinen`;
        return false;
    }
    else{
        Tulos.innerHTML = `luku ${Syota.value} on pariton`;
        return false;
    }
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake1").requestFullscreen();
    return false;
}