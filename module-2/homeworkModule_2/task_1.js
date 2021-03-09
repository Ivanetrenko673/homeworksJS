 

  

  const max = 6;
  

  const logItems = function (i, m) {
    for (i = 1; i < max; i += 1) {
     let number = i ;
     console.log(number)
    }
    for (m =logItems.slice(1) ; m < max; m += 1) {
      let name = m;
      console.log(name)
    }
    return number - name;
  }
logItems();

 logItems['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];