const credits = 23580 ;

const pricePerDroid = 3000 ;

const DroidS   = prompt (  " Скільки дроїдів ви хочете придбати "  ) ;

let totalPrice ;

let differencePrice ; 

if ( DroidS  === null ) {
   console.log('Скасовано користувачем!');
  
} else  {
   totalPrice = ( pricePerDroid * DroidS  ) ;

   if ( totalPrice > credits  ) {
    console.log('Недостатньо коштів на рахунку!')
 } else {
    differencePrice = ( credits - totalPrice );
    alert ( `'Ви купили ${ DroidS} дроїдів, на рахунку залишилося ${differencePrice} кредитів.'` ) ;
 }
}
