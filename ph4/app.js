"use strict"
const btnLaske = document.querySelector("#btnSumma");
const btnErotus = document.querySelector("#btnErotus");
const btnKerto = document.querySelector("#btnKerto");
const btnJako = document.querySelector("#btnJako");
const btnTyhjenna = document.querySelector("#btnTyhjenna");
const tulos = document.querySelector("#tulos");

btnSumma.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    tulos.innerHTML = Number(luku1) + Number(luku2);
    return false;
}

btnErotus.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    tulos.innerHTML = Number(luku1) - Number(luku2);
    return false;
}

btnKerto.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    tulos.innerHTML = Number(luku1) * Number(luku2);
    return false;
}

btnJako.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    if(luku2 == 0) {
        tulos.innerHTML = "Virhe! Lukua ei voida jakaa nollallla.";
        return false;
    } else {
        tulos.innerHTML = (Number(luku1) / Number(luku2)).toFixed(2);
        return false;
    }
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake1").reset();
}