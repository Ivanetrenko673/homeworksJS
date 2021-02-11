let input ;
let totalt = 0;


while ( true ) {
    input = prompt("Введіть число");
    if(  input === null ){
    break;
} else {
    totalt += Number(input);
}
}
alert(`Загальна сума чисел дорівнює ${totalt}`)