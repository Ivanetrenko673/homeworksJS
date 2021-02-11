
 let cost ;
 let land ;

const country = prompt ('В яку країну відбуватиметься доставка') ;
const lowCountry =  (country.toLowerCase( )) ;

switch (lowCountry ) {
  case 'китай':
    cost = 100;
    break;

  case 'чилі':
    cost = 250;
    break;

  case 'австралія':
    cost = 170;
    break;

    case 'індія':
    cost = 80;
    break;

    case 'ямайка':
    cost = 120;
    break;

  default:
   break;

   
}

if ( lowCountry   ) {
  alert( `Доставка в країну ${lowCountry } буде коштувати ${cost} кредитів` );
} else {
  land = alert ('У вашій країні доставка недоступна');
}