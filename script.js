//your code here
var num = document.getElementById('num');

var input = document.getElementById('guess').value;
var Random;

function findHotOrCold() {
	var dif = Math.abs(Random - Number(input));
   if(dif <= 5)
   {
	 document.getElementById('respond').innerHTML = "Hot"; 
    }
   else
	{
	 document.getElementById('respond').innerHTML = "Cold";
    }
}

function generate_random_number() {
    Random = (Math.random() * 41 - 20); 
    num.innerText = Random;
	findHotOrCold();
}