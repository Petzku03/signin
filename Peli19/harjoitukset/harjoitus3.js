let tag=process.argv[2];
// Pelihahmon nimi
let playerName='Ergo';

let otsikko='HARJOITUS 3';
console.log(`#### ${otsikko} ####`);

// Onko kyseessä lentävä vihollinen?
if (tag =='flyEnemy') {
    // Totuushaara
    console.log(`Pelihahmoon ${playerName} törmäsi lentävä vihollinen (${tag})`);       // Huomaa taas miten muuttujan sisältö tulsotetaan merkkijonoon.
}
// Onko kyseessä maalla liikkuva vihollinen?
else if(tag == 'groundEnemy'){
    // Totuushaara
    console.log(`Pelihahmoon ${playerName} törmäsi maalla liikkuvaa vihollinen (${tag})`);
}
// Onko kyseessä vedessä liikkuva vihllinen?
else if (tag =='waterEnemy'){
    // Totuushaara
    console.log(`Pelihahmoon ${playerName} törmäsi vedessä liikkuva vihollinen (${tag})`);
}else{
    // Epätosihaara eli mikään yllä olevista ei ole oikea
    console.log(`Pelihahmoon ${playerName} törmäsi tuntematon vihollinen (${tag})`);
}

// VALINTARAKENTEET OVAT TÄRKEITÄ! ILMAN NIITÄ EI OHJELMOINTI ONNISTU! JOTEN HARJOITTELE NIIDEN KÄYTTÖÄ!