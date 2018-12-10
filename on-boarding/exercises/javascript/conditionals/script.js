//Travel

var likesToTravel = true;

if (likesToTravel) {
    console.log('Bon voyage!');
} else {
    console.log('Enjoy your couch!');
}

//Favorite foods

var favoriteFood = 'chocolate';

if (favoriteFood === 'fried pickles') {
    console.log("Congratulations! You have excellent taste!");
} else {
    console.log('But have you tried fried pickles?');
}

//Math

if (1 + 1 > 5) {
    console.log('True fact!');
} else {
    console.log('Lies!');
}

if (4 + 5 <= 20 ) {
    console.log('True fact!');
} else {
    console.log('Lies!');
}

if (6 - 2 >= 0) {
    console.log('True fact!');
} else {
    console.log('Lies!');
}

//language

var preferredLanguage = {
    name: 'Sable',
    language: 'English'
}



if (preferredLanguage.language === 'English') {
    var greeting = `Hello, ${preferredLanguage.name}!`;
} else if (preferredLanguage.language === "Spanish") {
    var greeting = `Hola, ${preferredLanguage.name}!`;
} else {
    var greeting = `Bonjour, ${preferredLanguage.name}!`;
}


var languageContainer = document.querySelector('#personal-greeting');
languageContainer.innerHTML = greeting;

//Grandma's kitchen

var time = "2:00 pm";
var isHungry = true;

if (time === "7:30 am" && isHungry) {
    console.log("Time for breakfast!");
} else if (time === "12:00 pm" && isHungry) {
    console.log("Time for lunch!");
} else if (time === "7:00 pm" || time === "8:00 pm" && isHungry) {
    console.log("Time for dinner!");
} else if (isHungry) {
    console.log('Time for a snack!');
} else {
    console.log("Have a cookie anyway!");
}

//Grades

var grade = 76;

if (grade >= 0 && grade <= 69) {
    console.log("You got an 'F'");
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a 'D'");
} else if (grade >= 77 && grade <= 84) {
    console.log("You got a 'C'");
} else if (grade >= 85 && grade <= 92) {
    console.log("You got a 'B'");
} else {
    console.log("You got an 'A'");
}