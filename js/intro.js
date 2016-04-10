// Make sure you open up the console in your browser!
console.log("Hello, is there anybody out there?");

/*

This
is
a
multi
line
comment

*/

// veriable that holds my name
var myName = "Brendon Bryon-Kay";

// How many characters are in my name?
console.log(myName.length);

// variable that holds my age
var myAge = 25;

// If the user is older than 21
if( myAge >= 20 ) {
	console.log("You are an adult");
} else if( myAge >= 13){
	console.log("Your not an adult yet");
}else {
	console.log("You are a cihld");
}

// check the length of the visitors name
if( myName.length == 0){
	console.log("Your name is required");
} else if( myName.length > 10) {
	console.log("Your name must be less than 10 characters. You have written " + myName.length);
}






















