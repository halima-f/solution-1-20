
var cityName=prompt("Enter your city name?", "City");
cityName= cityName.toLowerCase();
if(cityName==="karachi"){
    alert("Welcome to city of lights");
}


var gender=prompt("Enter your gender?", "male/female");
gender=gender.toLocaleLowerCase();
if(gender==="male"){
    alert("Good Morning Sir!");
}
else if(gender==="female"){
    alert("Good Morning Maam!");
}
else{
    alert("Good Morning!");
}


var color=prompt("Enter traffic signal color?");
color=color.toLocaleLowerCase();
if(color==="red"){
    alert("Must Stop");
}
else if(color==="yellow"){
    alert("Ready to move");
}
else if(color==="green"){
    alert("Move now");
}
else{
    alert("This is not a road traffic signal color");
}



var fuel=prompt("Enter your remaining fuel in the car in litres?");
fuel=Number(fuel);
if(fuel < 0.25 ){
    alert("Please refill the fuel in your car");
}
else{
    alert("You are good to go");
}


var a=4;
if(++a===5){
    alert("given condition for variable a is true");
    
}
console.log("The above alert appeared");


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
console.log("The above alert didn't appear");


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
console.log("The above alert didn't appear");
if (c === 13){
alert("condition 2 is true");
}
console.log("The above alert appeared");
if (++c < 14){
alert("condition 3 is true");
}
console.log("The above alert didn't appear");
if(c === 14){
alert("condition 4 is true");
}
console.log("The above alert appeared");


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
console.log("The above alert appeared");


    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }


if("car" < "cat"){
    alert("car is smaller than cat");
}
console.log("The above alert appeared");
        

var sub1Marks=prompt("Enter first subject marks out of 100?");
var sub2Marks=prompt("Enter second subject marks out of 100?");
var sub3Marks=prompt("Enter third subject marks out of 100?");
sub1Marks=Number(sub1Marks);
sub2Marks=Number(sub2Marks);
sub3Marks=Number(sub3Marks);
var totalMarks=300;
var totalMarksObtained= sub1Marks + sub2Marks + sub3Marks;
var Percentage= ((totalMarksObtained) * 100) / totalMarks ; 
document.write("<h1>"+"Mark Sheet"+"</h1>");
document.write( "Total Marks: " +totalMarks+"<br>");
document.write( "Marks Obtained: " +totalMarksObtained+"<br>");
document.write( "Percentage: " +Percentage+"%"+"<br>");
if ( Percentage >= 80){
    document.write( "Grade: A+"+"<br>");
    document.write( "Remarks: Excellent");
}
else if ( Percentage >= 70){
    document.write( "Grade: A"+"<br>");
    document.write( "Remarks: Good");
}
else if ( Percentage >= 60){
    document.write( "Grade: B"+"<br>");
    document.write( "Remarks: You need to improve");
}
else{
    document.write( "Grade: Fail"+"<br>");
    document.write( "Remarks: Sorry");
}


var secretNum=5;
var userNum= prompt("Dear user guess the secret number 1-10");
userNum=Number(userNum);
if ( userNum === secretNum){
    alert("Bingo, Correct Answer");
}
else if( userNum === ++secretNum){
    alert("Close enough to the correct answer");
}
else{
    alert("Try Again");
}


var num=prompt("Dear user enter the number?");
num=Number(num);
if (num % 3 == 0){
    alert("The number is divisible by 3")
}


var num=prompt("Enter any number?");
num=Number(num);
if (num % 2 == 0){
    alert("You entered Even Number");
}
else{
    alert("You entered Odd Number");
}

var temp=prompt("Enter today's temperature?");
temp=Number(temp);
if (temp > 40 ){
    alert("It is too hot outside.")
}
else if (temp > 30 ){
    alert("The Weather today is Normal.")
}
else if (temp > 20 ){
    alert("Today’s Weather is cool.")
}
else if (temp > 10 ){
    alert("OMG! Today’s weather is so Cool.")
}


var firstNum=prompt("Enter your first number?");
var secondNum=prompt("Enter your second number?");
var operator=prompt("Enter the operation you would like to perform +, -, *, /, %")
var result;
firstNum=Number(firstNum);
secondNum=Number(secondNum);
if (operator=== "+"){
    result= firstNum + secondNum;
    alert(result);
}
else if (operator=== "-"){
    result= firstNum - secondNum;
    alert(result);
}
else if (operator=== "*"){
    result= firstNum * secondNum;
    alert(result);
}
else if (operator=== "/"){
    result= firstNum / secondNum;
    alert(result);
}
else if (operator=== "%"){
    result= firstNum % secondNum;
    alert(result);
}
