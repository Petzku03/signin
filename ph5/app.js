"use strict"

const btnTarkista = document.querySelector("#btnTarkista");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

const rekisterinumero = document.querySelector("#rekisterinumero");

btnTarkista.onclick = function(){
    rekisterinumero.value = rekisterinumero.value.toUpperCase();

    return false;
}

btnTyhjenna.onclick = function () {
    document.getElementById("lomake").reset();
};