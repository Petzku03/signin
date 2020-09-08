/*
    Tässä erimerkissä maa muutetaan ennen vertailua pieniksi kirjaimiksi, joten sen voi antaa millä kirjainkoolla tahansa. 
    Tässä tarkastetaan, myös onko maa annettu. Jos maata ei anneta tulostuu teksti `Et antanut maata`.
    Jos antaa muun maan kuin hertta, ruutu, risti tai pata, tulostuu `tuntematon maa`.
*/

if (process.argv.length < 3) {
    console.log('Et antanut maata');
}
 else {
     let maa=process.argv[2];
     let symboli;
if(maa.toLowerCase()==='pata') {
   symboli='\u2660';
}
else if(maa.toLowerCase()==='risti') {
     symboli='\u2663';
}
else if(maa.toLowerCase()==='hertta') {
    symboli='\u2665';
}
else if(maa.toLowerCase()==='ruutu') {
    symboli='\u2666';
}
else {
 symboli='tuntematon maa';
 }
 console.log(symboli);
}