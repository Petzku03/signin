let maa = process.argv[2];

switch(maa.toLowerCase()){
    case 'hertta':
    case 'ruutu':
        console.log('punainen');
        break;
    case 'pata':
    case 'risti':
        console.log('musta');
        break;
    default:
        console.log("antamaasi maata ei ole!");
}

// Koodissa ei ole mitään vikaa, se toimii oikein.