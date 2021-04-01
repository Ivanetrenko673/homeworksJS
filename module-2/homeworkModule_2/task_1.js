


let max = logItems.length ;



console.log(max)

const logItems = function () {
   for (let i = 1 ; i >= max; i += 1 ){
       let lengh = logItems.slice(1 )
       console.log(`[${i}] - [${lengh}]`)
   }
    
  };
  
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
