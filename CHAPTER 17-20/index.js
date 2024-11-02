
var Arr=[[],[],[]];


var activities = [
    [0, 1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
alert(activities);




for (var i=1; i <=10; i++){
    document.write(i +"<br>");
}


var x=prompt("Enter a number to show its multiplication table?");
var y=prompt("Enter the length of multiplication table?");

document.write("<h3>" +"Multiplication Table of " +x  +"</h3>");
document.write("<h3>" +"Length " +y  +"</h3>");
for( var i=1; i<=y;i++ ){
    document.write( x +" x "+ i +" = "+ (x*i) +"<br>");
}


var fruits = ["apple", "banana", "mango", "strawberry", "orange"];
document.write("<ul>")
for(var i=0; i<fruits.length;i++){
    document.write("<li>"+fruits[i]+"</li>");
}
document.write("</ul>")

for(var j=0; j<fruits.length;j++){
    document.write("Element at index "+j+ " is "+fruits[j]+"<br>");
}


document.write("<h3>Counting: </h3>")
for (i=1; i<=15;i++){
    document.write(i +",");
}

document.write("<h3>Reverse Counting: </h3>")
for (i=10; i>=1;i--){
    document.write(i +",");
}

document.write("<h3>Even: </h3>")
for (i=0; i<=20;i++){
    if (i % 2 == 0){
        document.write(i +",");
    }
}

document.write("<h3>Odd: </h3>")
for (i=0; i<=20;i++){
    if (i % 2 !== 0){
        document.write(i +",");
    }
}

document.write("<h3>Series: </h3>")
for (i=1; i<=20;i++){
    if (i % 2 == 0){
        document.write(i +"k ,");
    }
}

 
var bakeryItem=["cake", "apple pie", "cookie", "chips", "patties"];
var item=prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
    if(bakeryItem.indexOf(item) !==-1){
    alert(item +" is available at index "+bakeryItem.indexOf(item)+ " in our bakery");
    }
    else {
    alert("We are sorry "+item+" is not available in our bakery");
    }
      

var arr=[24,53,78,91,12]
var largestnum=0;
for(var i=0; i<arr.length; i++){
    if(arr[i] > largestnum)
    largestnum=arr[i];
}
document.write("Array items: " +arr);
document.write("<br>The largest number is: " +largestnum);

    

var arr=[24,53,78,91,12];
for(var i=0; i<arr.length; i++){
    var smallest=Math.min(arr[i]);
 }
document.write("Array items: " +arr);
document.write("<br>The smallest number is: " +smallest);


for (var i=1; i <=20; i++){
        document.write( i * 5 +",");
}
    


                            