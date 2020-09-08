"use strict"

const btnTulosta = document.querySelector("#btnTulosta");

btnTulosta.onclick = function (){

    const etunimi = document.querySelector("#etunimi").value;
    const sukunimi = document.querySelector("#sukunimi").value;
    const puhelinkoti = document.querySelector("#puhelinkoti").value;

    const henkilo = Henkilo(etunimi, sukunimi, puhelinkoti);

    const tulos = document.querySelector("#tiedot");

    tulos.innerHTML = henkilo.tulostaKotipuhelin();

    return false;
}

function Henkilo(_etunimi, _sukunimi, _puhelintyo){
    let henkilo = {
        etunimi:  _etunimi,
        sukunimi: _sukunimi,
        puhelin: [
            {tyyppi: "koti"},
            {numero: _puhelintyo}
        ],
        tulostaKotipuhelin(){
            return `${this.etunimi} ${this.sukunimi} puhelinnumero kotiin on ${this.puhelin[1].numero}`;
        }
    }
    return henkilo;
}