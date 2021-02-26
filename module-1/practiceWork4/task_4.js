const number = (Math.random() * (5 - 1) + 1);

const numbers = Math.round(number) ;

if ( numbers >= 1 && numbers <= 5) {
 console.log(numbers);
} else {
    console.log("...?")
}