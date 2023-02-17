//your code here
var num = document.getElementById('num');

var input = document.getElementById('guess').value;
var Random;

function findHotOrCold() {
	var dif = Math.abs(Random - Number(input));
	if(dif <= 5)
{
	document.getElementById('respond').innerHTML = "HOT"; 
}
else{
	document.getElementById('respond').innerHTML = "cold";
}
}

function generate_random_number() {
    Random = (Math.random() * 40 - 20); 
   num.innerHTML = Random;
	findHotOrCold();
}