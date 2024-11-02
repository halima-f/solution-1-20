
var a=10;
document.write("<h1>"+ "Results:" +"</h1>");
document.write("The value of a is: " +a +"<br>");
document.write("......................" +"<br>");
document.write("The value of ++a is: " +(++a) +"<br>");
document.write("Now the value of a : " +a +"<br>");
document.write("<br>");
document.write("The value of a++ is: " +(a++) +"<br>");
document.write("Now the value of a : " +a +"<br>");
document.write("<br>");
document.write("The value of --a is: " +(--a) +"<br>");
document.write("Now the value of a : " +a +"<br>");
document.write("<br>");
document.write("The value of a-- is: " +(a--) +"<br>");
document.write("Now the value of a : " +a +"<br>");


var a=2; b=1;
var result= --a - --b + ++b + b--;
         //   1 -   0 +   1 + 1    
document.write("<h1>"+ "Output:" +"</h1>");
document.write("a is: " +a +"<br>");
document.write("b is: " +b +"<br>");
document.write("result is: " +result +"<br>");


var name= prompt("Enter your name?");
document.write("<h1>"+"Welcome " +name +"!" +"</h1>");


var x=prompt("Enter the Number to print the table?");
if(x==""){
    x=5;
}
document.write("<h3>" +"The user entered " +x  +"</h3>");
for( var i=1; i<=10;i++ ){
    document.write( x +" x "+ i +" = "+ (x*i) +"<br>");
}


var sub1=prompt("Enter first subject name?");
var sub2=prompt("Enter second subject name?");
var sub3=prompt("Enter third subject name?");
var sub1Marks=prompt("Enter first subject marks out of 100?");
var sub2Marks=prompt("Enter second subject marks out of 100?");
var sub3Marks=prompt("Enter third subject marks out of 100?");
sub1Marks=Number(sub1Marks);
sub2Marks=Number(sub2Marks);
sub3Marks=Number(sub3Marks);
var totalMarks=100;
var total= totalMarks*3;
var totalMarksObtained= sub1Marks + sub2Marks + sub3Marks;
var sub1per=(sub1Marks*100)/totalMarks;
var sub2per=(sub2Marks*100)/totalMarks;
var sub3per=(sub3Marks*100)/totalMarks;
var Percentage= ((sub1per + sub2per + sub3per) * 100) / 300 ; 
document.write("<h1>"+"Table"+"</h1>");
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+sub1Marks+"</td><td>"+sub1per+"%"+"</td></tr><tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+sub2Marks+"</td><td>"+sub2per+"%"+"</td></tr><tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+sub3Marks+"</td><td>"+sub3per+"%"+"</td></tr><tr><td>Total</td><td>"+total+"</td><td>"+totalMarksObtained+"</td><td>"+Percentage+"%</td></tr></table>")