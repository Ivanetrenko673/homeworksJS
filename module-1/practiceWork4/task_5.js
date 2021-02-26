const land = prompt("Введіть мову ") ;

let country ;

switch(land) {

    case 'ua':

    country = "Ukrain";
    break;

    case 'en':
    country = "England";
    break;

    case'ru':
    country = "Russian federation";
    break;

    case 'fr':
    country = "Janvier";
    break;

    default :

    console.log("No country");
}

console.log(country);