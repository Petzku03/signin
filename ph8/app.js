"use strict"

const btnTulosta = document.querySelector("#btnTulosta");

btnTulosta.onclick = function (){

    const etunimi = document.querySelector("#etunimi").value;
    const sukunimi = document.querySelector("#sukunimi").value;
    const puhelinkoti = document.querySelector("#puhelinkoti").value;
    const puhelintyo = document.querySelector("#puhelintyo").value;
    const kotiosoite = document.querySelector("#kotiosoite").value;

    const henkilo = Henkilo(etunimi,sukunimi, puhelinkoti, puhelintyo, kotiosoite);

    const tulos = document.querySelector("#tiedot");

    tulos.innerHTML = henkilo.tulostaKotipuhelin();

    return false;
}

function Henkilo(_etunimi, _sukunimi, _puhelinkoti, _puhelintyo, _kotiosoite){
    let henkilo = {
        etunimi:  _etunimi,
        sukunimi: _sukunimi,
        kotiosoite: _kotiosoite,
        puhelin: [
            {tyyppi: "koti"},
            {numero: _puhelinkoti}
        ],
        puhelin: [
            {tyyppi: "tyo"},
            {numero: _puhelintyo}
        ],
        tulostaKotipuhelin(){
            return `${this.etunimi} ${this.sukunimi.charAt(0)}, työ: ${this.puhelin[1].numero} asuu osoitteessa ${this.kotiosoite}`;
        }
    }
    return henkilo;
}