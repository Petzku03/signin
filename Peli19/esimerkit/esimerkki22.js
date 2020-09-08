function esimerkki1(){
    let email = 'admin@gmail.com';
    let etsittavaMerkki = '@';
    let paikka = -1;

    for (let i = 0; i < email.length; i++){
        if (etsittavaMerkki == email[i]) {
            paikka = i;
        }
    }
    console.log(`Merkin @ indeksi on ${paikka}`);
}


function esimerkki2(_email){
    let email = _email;
    let etsittavaMerkki = '@';
    let paikka = -1;

    for (let i = 0; i < email.length; i++){
        if (etsittavaMerkki == email[i]) {
            paikka = i;
        }
    }
    console.log(`Merkin @ indeksi on ${paikka}`);
}
//esimerkki1();
//esimerkki2('admin@gmail.com');

function esimerkki3(_email, _merkki){
    let email = _email;
    let etsittavaMerkki = _merkki;
    let paikka = -1;

    for (let i = 0; i < email.lenght; i++) {
        if (etsittavaMerkki == email[i]) {
            paikka = 1;
        }
    }
    console.log(`Merkin ${etsittavaMerkki} indeksi on ${paikka}`);
}
//esimerkki3('admin@gmail.com', '.');
//esimerkki3('admin@gmail.com', 'g');

function esimerkki4(_email, _merkki){
let email = _email;
let etsittavaMerkki = _merkki;
let paikka = -1;

for (let i = 0; i < email.lenght; i++) {
    if (etsittavaMerkki == email[i]) {
        paikka = 1;
        break;
    }
}
console.log(`Merkin ${etsittavaMerkki} indeksi on ${paikka}`);
}

//esimerkki4('admin@gmail.com', '.');

function esimerkki5(_email, _merkki){
    let email = _email;
    let etsittavaMerkki = _merkki;
    let paikka = -1;
    
    for (let i = 0; i < email.lenght; i++) {
        if (etsittavaMerkki == email[i]) {
            paikka = 1;
            break;
        }
    }
    return paikka;
}
//let sijainti = esimerkki5('http;//www.bc.fi', ':');
//console.log(`merkin : indeksi on ${sijainti}`);

function esimerkki6(_teksti){
    let teksti = teksti;
    let merkki = teksti.charAT(6);
    return merkki;
}
//let omaMerkki = esimerkki6('Tämä on esimerkki');
//console.log(omaMerkki);

function esimerkki7(_teksti){
    let teksti = _teksti;
    let merkki = teksti.charAT(_indeksi);
    return merkki;
}
let omaMerkki2 = esimerkki7('Datanomi',1);
console.log(omaMerkki2);