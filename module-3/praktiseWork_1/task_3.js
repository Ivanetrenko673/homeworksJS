const  calculator  = {
  
   read()  {
   const a = prompt("Введіть перше число");
   const b = prompt("Введіть друге число");
 this.number1 = Number(a)
 this.number2 = Number(b)
   },
  sum(){
     return this.number1 + this.number2
  },
  mult(){
   return this.number1 * this.number2
}
}


calculator.read()

console.log( calculator.number1)

console.log(calculator.sum())
console.log(calculator.mult())