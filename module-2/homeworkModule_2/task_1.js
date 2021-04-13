
const logItems = function ( array ) {
    for(const arr of array){
        console.log(Number(array.indexOf(arr)) + 1 + " - " + arr)
    }
}


  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

  
