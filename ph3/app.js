"use strict";

const btnLaske = document.querySelector("#btnLaske");
const btnTyhjennä = document.querySelector("#btnTyhjenna");

btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;



    const summa = document.querySelector("#summa");
    const erotus = document.querySelector("#erotus");
    const kertolasku = document.querySelector("#kertolasku");
    const jakolasku = document.querySelector("#jakolasku");

    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = "Lukujen summa on " + lukujenSumma;

    const lukujenErotus = Number(luku1) - Number(luku2);
    erotus.innerHTML = "lukujen erotus on" + lukujenErotus;

    const lukujenKertolasku = Number(luku1) * Number(luku2);
    kertolasku.innerHTML = "lukujen kertolasku on " + lukujenKertolasku;

    const lukujenJakolasku = Number(luku1) / Number(luku2);
    jakolasku.innerHTML = "lukujen jakolasku on " + lukujenJakolasku;

    return false;
}