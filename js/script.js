// Variable
var userNumber = prompt("How many numbers would you like?");
var numArray = [];

for (let i = 0; i < userNumber; i++)
{
    numArray[i] = Math.floor(Math.random() * 99);
}

document.getElementById("results").innerHTML = numArray