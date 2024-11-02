var stuName=[];

var stuId={};

var names=["Maryam", "Hadi", "Hamza", "Bilal"];

var num=[10,20,30,40,50,60,70,80,90,100];

var boolean=[true,false];

var mixedArray = [1, "Ali", "Now is", true];

document.write("<h1>Qualifications:</h1>");
var degree=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for ( var i=0; i < degree.length; i++)
{
    document.write("<p>"+degree[i]+"</p>");
}

var stuName=["Hammad", "Sara", "Ayesha"];
var stuScore=[320,230,480];
for (var i=0; i < stuName.length; i++){
    document.write("Score of " +stuName[i]+ " is " +stuScore[i]+" Percentage: " +(stuScore[i]*100)/500+"%");
    document.write("<br>");
}


var color=["red", "green", "yellow", "black", "blue", "orange"];
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

//a)
var userColor=prompt("Enter the color name you want to add to the begining of the array?");
color.unshift(userColor);
document.write("<h3>Add color to the Beginning of the Array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

// b)
var userColor=prompt("Enter the color name you want to add to the end of the array?");
color.push(userColor);
document.write("<h3>Add color to the End of the Array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

//c)
var userColor1=prompt("Enter the first color name you want to add to the begining of the array?");
var userColor2=prompt("Enter the second color name you want to add to the begining of the array?");
color.unshift(userColor1, userColor2);
document.write("<h3>Add two color names to the Beginning of the Array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

//d)
color.shift();
document.write("<h3>Deleting the first color in the array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

//e)
color.pop();
document.write("<h3>Deleting the last color in the array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

//f) 
var userChoice=prompt("Enter the index number you want to add a color?");
var userColor=prompt("Enter the color name you want to add?");
userChoice=Number(userChoice);
color.splice(userChoice, 0, userColor);
document.write("<h3>Updated Array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}

// g)
var userChoice=prompt("Enter the index number you want to delete?");
var userColor=prompt("Enter the number of colors you want to delete?");
color.splice(userChoice, userColor);
document.write("<h3>Updated Array</h3>")
for(var i=0; i < color.length; i++){
    document.write(color[i]+"<br>");
}



var arr=[320,230,480,120];
document.write("Score of Students: " +arr +"<br>");
var sortedArr=arr.sort(function(a, b){return a-b});
document.write("Ordered Scores of Students:" +sortedArr);


var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selectedCities=cities.slice(2,4);
document.write("Cities list:<br>" +cities +"<br>");
document.write("Selected Cities list:<br>" +selectedCities);


var arr = ["This" , "is" , "my" , "cat"];
var newarr = arr.join(" ");
document.write("<h1>Arry:</h1>");
document.write(arr);
document.write("<h1>String:</h1>");
document.write(newarr);

var devices=["keyboad", "mouse", "printer", "monitor"]
document.write("<h1>Devices: </h1>");
for(i=0; i<devices.length;i++){
    document.write(" "+devices[i]+"");        
}
var lastitem=devices.shift();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.shift();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.shift();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.shift();
document.write("<h3>Output: </h3>" +lastitem);


var devices=["keyboad", "mouse", "printer", "monitor"]
document.write("<h1>Devices: </h1>");
for(i=0; i<devices.length;i++){
    document.write(" "+devices[i]+"");
}
var lastitem=devices.pop();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.pop();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.pop();
document.write("<h3>Output: </h3>" +lastitem);

var lastitem=devices.pop();
document.write("<h3>Output: </h3>" +lastitem);


var phoneCompany=["Apple","Samsung", "Motorola", "Nokia", "Sony" ," Haier"];
document.write("<select>")
for (x=0; x < phoneCompany.length; x++){
 document.write("<option>"+phoneCompany[x]+"</option>");
}
document.write("</select>")