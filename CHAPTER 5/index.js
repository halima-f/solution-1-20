var num1 = 3, num2 = 5; 
var addition = num1 + num2;
document.write("1 - The sum of ", num1 +   " and " + num2 + " is " +  addition + "</br>" )

var sub = num1 - num2;
var multiply = num1 * num2;
var divide = num1 % num2;
document.write("2 - The subraction of ", num1 +   " and " + num2 + " is " +  sub + "</br>" )
document.write("3 - The multiplication of ", num1 +   " and " + num2 + " is " +  multiply + "</br>" )
document.write("4 - The modulus of ", num1 +   " and " + num2 + " is " + divide + "</br>" )

var myVariable;
document.write("<br> 3- Value after variable declaration is " + myVariable);
myVariable = 5;
document.write("<br> Initial value: " + myVariable); 
myVariable++;
document.write("<br> Value after increment is: " + myVariable); 
myVariable +=  7;
document.write("<br> Value after addition is: " + myVariable); 
myVariable--;
document.write("<br> Value after decrement is: " + myVariable); 
myVariable %= 3;
document.write("<br> The remainder is: " + myVariable); 

var ticket = 600;
var ticket5 = ticket * 5;
document.write("</br></br>4 - Total cost to buy 5 tickets to a movie is " + ticket5 + "PKR. ", "</br>")