


// var num1 = +prompt("enter mark");
// var num2 = +prompt("enter obtained");
// var result = (num2/num1*100);

// document.write("total mark" + num1);
// document.write("markobtained" + "  " + num2);
// document.write("percentage" + "  " + result);


// var pkrValue = +prompt("enter the pakistani value");
// var usValue = +prompt("enter us value");
// var riyadValue = +prompt("enter riyadh value");
// var pkrResult = usValue + 270

// document.write(pkrResult);

// q no 11

// var currentAge = +prompt("current age");
// var birthAge = +prompt("birth age");
// var newAge = currentAge - birthAge;
// document.write("hi age is" + "  " + newAge);

// q no 12

// var snakeName = prompt("favourite snake name");
// var estimatedAge = +prompt("estimated age");
// var currentAge = +prompt("current age");
// var eatEgg = +prompt("eat egg per day");

// var totalAge = estimatedAge - currentAge;
// var eatTotal = totalAge *365 * eatEgg;
// document.write("snake name" + "  " + snakeName);
// document.write ( "estimated age" + " " + estimatedAge);
// document.write("current age" + " " + currentAge);
// document.write("total eat snak" + " " + eatTotal);


var Btn = document.getElementById("btn");

 Btn.onclick = function foo(){
    var genPass = 184937;
    var genRandom =  (Math.random()*genPass);
    var reGenetor = Math.floor(genRandom);
    document.getElementById("input").innerHTML = reGenetor

    
};