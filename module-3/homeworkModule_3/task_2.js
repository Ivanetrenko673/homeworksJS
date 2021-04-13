const countProps = function () {

  for (let argument of arguments ) {
    Object.keys(countProps).length
    console.log(keys)
  }

  };
  
  
  console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3