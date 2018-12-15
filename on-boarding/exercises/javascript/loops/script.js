//Tweet
var counter = 1;

while(counter <= 100) {
    console.log("TWEET TWEET");
    counter ++;
}

//Favorite foods
var favoriteFoods = ["Chocolate" , "pasta" , "curry" , "sushi" , "cherry pie"]


for(var i = 0 ; i < favoriteFoods.length ; i++) {
    console.log(favoriteFoods[i]);
}

//Interests
var myInterests = ["reading" , "playing video games" , "weightlifting" , "dog training" , "programming"];

for(var i = 0 ; i < myInterests.length ; i ++) {
    if (myInterests[i] === "playing video games") {
        console.log(`My absolute favorite interest is: ${myInterests[i]}.`);
    } else {
    console.log(`One of my interests is: ${myInterests[i]}.`);
}}

//Harry Potter
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(var i = 0 ; i < harryPotterTitles.length ; i ++) {
    console.log(`Harry Potter ${harryPotterTitles[i]}.`);
}

//Student grades
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

var aCounter = 0;
var bCounter = 0;
var cCounter = 0;
var dCounter = 0;
var fCounter = 0;

for (var i = 0 ; i < grades.length ; i ++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        console.log('You got an "F".');
        fCounter++;
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        console.log("You got a 'D'.");
        dCounter++;
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        console.log("You got a 'C'.");
        cCounter++;
    } else if (grades[i] > 84 && grades[i] <= 92) {
        console.log("You got a 'B'.");
        bCounter++;
    } else {
        console.log("You got an 'A'.");
        aCounter++;
    }
}

console.log(`${aCounter} students got an A!`);
console.log(`${bCounter} students got a B!`);

var gradeArray = [aCounter, bCounter, cCounter, dCounter, fCounter];
var commonScore= -1; mostCommon = 0;
for (var i = 0; i < gradeArray.length; i++) {
    if (gradeArray[i] > mostCommon) {
        mostCommon = gradeArray[i];
    }
}

console.log(`The most common grade was ${mostCommon}`);


//Interrupting Cow

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


var cowString = "";


for (var c = 0 ; c < sentenceArray.length ; c++) {
    cowString = cowString + `<p>${sentenceArray[c]}</p>`

}

sentenceContainer = document.querySelector("#cow-sentence");
sentenceContainer.innerHTML = cowString;

//Downtown Restaurants
var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

var restString = "";

for (var j = 0; j < downtownRestaurants.length; j++) {
    restString = restString + `<li>${downtownRestaurants[j]}</li>`
}


var restaurantContainer = document.querySelector("#restaurants-list");
restaurantContainer.innerHTML = restString;



//Movie Schedule
var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
  ]

var HTMLString = "";
  

  for (var i = 0 ; i < movieSchedule.length ; i++) {
    HTMLString = HTMLString + `
    <h1>${movieSchedule[i].title}</h1>
    <p>${movieSchedule[i].rating}</p>
    <p>${movieSchedule[i].currentlyPlaying}</p>
    <img src= "${movieSchedule[i].poster}"</img>
    `
  }

  movieContainer = document.querySelector("#movie-schedule");
  movieContainer.innerHTML = HTMLString;





