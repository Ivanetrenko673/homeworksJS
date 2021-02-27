

const  myNewArrowFunction = ( a , b, ...manyMore ) => {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMore);
}

myNewArrowFunction(1, 2 , 3)

myNewArrowFunction(100, 200, 300, 400, 500);

myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");



