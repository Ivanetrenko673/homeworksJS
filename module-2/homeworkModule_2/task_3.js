
const findLongestWord = function(string){
    string - string.split(' ');
    let LongestWord = '';
    for (let i = 0;i < string.lenght; i +1) {
        if (string[i].lenght > LongestWord.length){
            LongestWord = string[i] ; 
        }
}

    return LongestWord
}





console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
