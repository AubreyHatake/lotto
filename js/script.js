// Variables
var userNumber = prompt("How many numbers would you like?");
var numArray = [];
var lottoPicks = "";


// Fills the array
for (let i = 0; i < userNumber; i++)
{
    numArray[i] = Math.floor(Math.random() * 99);
}


function displayNumbers() {
// Displays array to the page 
for (var i = 0; i < numArray.length; i++)
if (i == userNumber-1)
{
    lottoPicks += numArray[i]
    document.getElementById("results").innerHTML = lottoPicks;
}
else
{ 
    lottoPicks += numArray[i] + "-";
 document.getElementById("results").innerHTML = lottoPicks;
}
}
// if the user enters a number less than 9 it will display their numbers, if not it will display a string.
if (userNumber < 9)
{
    displayNumbers();
}
else
{
    document.getElementById("results").innerHTML = "Enter a number less than 9"
}

// this will generate more numbers if the user clicks the button on the page
document.getElementById("btn").addEventListener("click", displayNumbers);