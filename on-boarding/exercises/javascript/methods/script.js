// 1. Pet Store

var dennisObject = {
    name: "Dennis",
    species: "bird",
    favoriteThings: ["sparkles", "bells", "seeds"],
    vocalize: function(sound) {
        console.log("Tweet!");
    }
}
dennisObject.vocalize();

var stacyObject = {
    name: "Stacy",
    species: "lizard",
    favoriteThings: ["log", "heat lamp", "meal worms"],
    vocalize: function(sound) {
        console.log("gurk");
    }
}

stacyObject.vocalize();

var flapjackObject = {
    name: "Flapjack",
    species: "cat",
    favoriteThings: ["treats", "flirt pole", "mice"],
    vocalize: function(sound){
        console.log("meow")
    }
}

flapjackObject.vocalize();

// 2. Calculator
// Add three more methods to the calculator object for subtraction, division, and multiplication. Each method should return the result of the calculation.
// Call each method at least twice, passing in different parameters. (Hint: you'll need to store the returned values in variables.)

var calculator = {
    add: function(x, y) {
       return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
  }

var sum = calculator.add(2, 2);
var minus = calculator.subtract(2 , 2);
var multiplication = calculator.multiply(2 , 2);
var division = calculator.divide(2 , 2);
console.log(sum); // Expected output: 4
console.log(minus);
console.log(multiplication);
console.log(division);


//3. Movie Schedule
var starWarsObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977",
    printMoviePoster: function(){
      HTMLString = `<h2>${starWarsObject.title}</h2>
                    <p>${starWarsObject.genre}</p>
                    <p>${starWarsObject.releaseDate}</p>`;
      var movieContainer = document.querySelector("#movie-poster");
      movieContainer.innerHTML = HTMLString;
    }
  }

  starWarsObject.printMoviePoster();
  
var sableContactInfo = {
    name: "Sable Bowen",
    cell: "594-623-4107",
    email: "mishichan@gmail.com",
    address: "8421 Jenkins Avenue, Logan, WV 25821",
    callCellPhone: function(phoneNumberParameter){
        console.log(`${this.name} is now calling ${phoneNumberParameter}.`);
    },
    sendEmail: function(emailAddress){
        console.log(`${this.name} is now emailing ${emailAddress}.`);
    },
    sendMail: function(mailAddress){
        console.log(`${this.name} is now mailing ${mailAddress}.`);
    }
}

var adamContactInfo = {
    name : "Adam Bowen",
    cell: "832-416-8255",
    email: "redfaction@aol.com",
    address: "2263 28th Street, Barboursville, WV 82255",
    callCellPhone: function(phoneNumberParameter){
        console.log(`${this.name} is now calling ${phoneNumberParameter}.`);
    },
    sendEmail : function(emailAddress) {
        console.log(`${this.name} is now emailing ${emailAddress}.`);
    },
    sendMail: function(mailAddress) {
        console.log(`${this.name} is now mailing ${mailAddress}.`);
    }
}

sableContactInfo.callCellPhone("832-416-8255");
adamContactInfo.sendEmail("mishichan@gmail.com");
sableContactInfo.sendMail("redfaction@aol.com");

//Challenge: Shopping Cart
var shoppingCart = {
    items: [
      {
        name: "Bananas",
        totalPrice: 2.75
      },
      {
        name: "English Muffins",
        totalPrice: 3.99
      },
      {
        name: "Peanut Butter",
        totalPrice: 2.99
      }
    ],
    addToCart: function(objectToAdd, priceToAdd){
        var itemName = [shoppingCart.items];
        var obj = {};
        obj["name"] = objectToAdd;
        obj["price"] = priceToAdd;
        shoppingCart.items.push(obj["name"]);
        shoppingCart.items.push(obj["price"]);
        console.log(objectToAdd);
        console.log(priceToAdd);
        console.log(obj["name"]);
        console.log(obj["price"]);
        console.log(shoppingCart.items);

        // var nietos = [];
        // nietos.push({"01": nieto.label, "02": nieto.value});
        // return nietos;
    },
    calculateTotal: function(){
      var counter = 0;
      for(var i = 0; i < shoppingCart.items.length; i++){
          counter = counter + 1;
      }
      console.log(counter);
    },
    printShoppingCart: function(){
      HTMLString = "";
      for(var j = 0; j < shoppingCart.items.length; j++){
          HTMLString = HTMLString + `<p>${shoppingCart.items[j].name}</p>`
      } var stringContainer = document.querySelector("#shopping-cart");
        stringContainer.innerHTML = HTMLString;
    }
  }

  shoppingCart.addToCart("Chicken", "2.99");
  shoppingCart.calculateTotal();
  shoppingCart.printShoppingCart();