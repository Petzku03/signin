"use strict";

// Painikkeet muuttujiin
const btnLaske = document.querySelector("#btnLaske");
const btnTyhjennä = document.querySelector("#btnTyhjenna");

// Laske-painikkeen toiminnallisuus
btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;

    // Testausta varten console.log(luku1 + "," + luku2);

    // Kappaleet (p) muuttujiin
    const summa = document.querySelector("#summa");
    const keskiarvo = document.querySelector("#keskiarvo");
    const vertailu = document.querySelector("#vertailu");

    // Lasketaan  summa ja sijoitetaan se lomakkeelle
    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = "Lukujen summa on " + lukujenSumma;

    //Lasketaan lukujen keskiarvo
    const lukujenKeskiarvo = lukujenSumma / 2;
    keskiarvo.innerHTML = "Lukujen keskiarvo on " + lukujenKeskiarvo;

// Suoritetaan vertailu ja sijoitetaan tulos lomakkeelle
    vertailu.innerHTML = vertaile(Number(luku1), Number(luku2));
    //Lomaketta ei lähetetä
    return false;
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake").requestFullscreen();
}
// Apufunktio, joka vertailee kahta lukua ja
// tulostaa kumpi luvuista on suurempi
function vertaile(_luku1, _luku2){
    if (_luku1 < _luku2) {
        return `luku ${_luku2} > ${_luku1}`;    // luku 2 on suurempi
    } else if(_luku1 > _luku2) {
        return `luku ${_luku1} > ${_luku2}`;
    }else{
        return "Luvut ovat yhtäsuuria"
    }
}