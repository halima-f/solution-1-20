
var character=prompt("Enter your character? Number or String");
var item = character.charCodeAt(0);
if( (item >= 65) && (item <= 90))
{
    alert("You entered a Upper Case Letter");
}
else if( (item >= 97) && (item <= 122) )
{
    alert("You entered a Lower Case Letter");
}
else{
    alert("You entered a Number");
}



var num1=prompt("Enter your first num?");
var num2=prompt("Enter your second num?");
num1=Number(num1);
num2=Number(num2);
if (num1 > num2){
    alert(num1);
}
else if( num2 > num1){
    alert(num2);
}
else if(num1==num2){
    alert("The two integers are equal");
}


var num=prompt("Enter your num positive, negative or zero?");
num=Number(num);

if (num > 0){
    alert("The entered number is positive");
}
else if( num < 0){
    alert("The entered number is negative");
}
else if(num===0){
    alert("The entered number is zero");
}


var letter=prompt("Enter your letter?");
letter=letter.toLocaleLowerCase();
if (letter.length > 1)
{
    alert("You entered a word not a letter");
}
else if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        alert("You entered a vowel.");
    }
else{
        alert("You entered a consonant.");
}


var password="hello";
var userpassword=prompt("Enter your password?");
if (userpassword === ""){
    alert("Please enter your password");
}
else if( userpassword === password){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password!")
}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
console.log(greeting);
// this is fixed parenthesis were missing

var time=prompt("Enter time in 24 hours clock format like: 1900 = 7pm");
time=Number(time);
if(time >= 0 && time < 1200 ){
    alert("Good Morning User!");
}
else if(time >= 1200 && time < 1700 ){
    alert("Good Afternoon User!");
}
else if(time >= 1700 && time < 2100 ){
    alert("Good Evening User!");
}
else if(time >= 2100 && time < 2359 ){
    alert("Good Night User!");
}