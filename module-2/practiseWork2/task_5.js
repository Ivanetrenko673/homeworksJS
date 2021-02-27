

const myAverageScore = (a, b, c , d) => {
 let mark = (a + b +c + d) / myAverageScore.length;
 if (mark > 91 && mark< 100 ){
     console.log("My average score: A")
 }else if (mark > 81 && mark< 90){
    console.log("My average score: B")
 }else if (mark > 71 && mark< 80){
    console.log("My average score: C")
 }else if ( mark <= 70 ){
    console.log("My average score: D")
 } 
}



myAverageScore(100, 75, 81, 96);
myAverageScore(45, 63, 85, 70);
myAverageScore(77, 82, 60, 58);
myAverageScore(93, 99, 93, 96);


