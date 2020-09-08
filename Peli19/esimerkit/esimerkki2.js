let lampotila = -1;

if (lampotila < -25) {
    console.log('Kova pakkanen');
} else if(lampotila < -10) {
    console.log('Pakkanen');
}else if (lampotila < 0) {
    console.log('pikkupakkanen');
} else if (lampotila < 25) {
    console.log('Lämmintä');
}else{
    console.log ('Hellettä');
}

    // Tämä rakenne toimiii seulan tavoin. Esin seulotaan alle -25 asteen lämpötilat pois lämpötilojen joukosta. Nämä menevät esimmäiseen tosihaaraan
    // ("Kova pakkanen"). Jäljelle jäävät lämpötilat ovat siis varmasti tasan -25 astetta tai sitä lämpimämpiä.
    //
    // Seuraavaksi seulotaan näistä jäljelle jääneistä kaikki lämpötilat, jotka ovat kylmempiä kuin -10 astetta ("pakkasta"). Tämän seulontavaiheen jälkeen
    // jäävät lämpötilat ovat siis varmasti tasan -10 astetta tai sitä lämpimämpiä.

    // Näin jatketaan kunnes on vain tasan +25 astetta tai sitä lämpimämmät lämpötilat (viimeinen else-haara).