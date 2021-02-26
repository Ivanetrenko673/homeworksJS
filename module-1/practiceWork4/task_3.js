const name = prompt("Введіть своє ім'я");

const nameleters = name.length ;

const surName = prompt ("Введіть свою фамілію");

const surNameleters = surName.length;

if (nameleters > 4 && surNameleters > 5){
alert(nameleters + surNameleters);
} else {
    alert("УПС")
}

console.log(surNameleters)