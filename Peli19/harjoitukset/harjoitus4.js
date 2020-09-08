let luku = process.argv[2];
let luku1 = process.argv[3];
if (luku == 0) {
    console.log(`Henkilö ${luku1} Menee Pohjoiseen`);
}else if(luku == 1) {
    console.log(`Henkilö ${luku1} Menee Etelään`);
}else if(luku == 2) {
    console.log(`Henkilö ${luku1} Menee Itään`);
}else if(luku == 3) {
    console.log(`Henkilö ${luku1} Menee Länteen`);
} else{
    console.log(`Henkilö ${luku1} Menee väärään suuntaan`);
}
