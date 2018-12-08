var alexObject = {
    firstName: "Alex",
    lastName: "Renfore",
    favoriteFoods: ["Pizza", "Chicken"],
    firstJob: "Pharmacy Tech",
    greatestFear: "Embarassment",
    homeTown: "Temple, Texas",
    secretTalents: ["DJing"],
    wouldSkyDive: "would not",
    petInfo: {
        type: "Dog",
        name: "Biscuit"
    }
}


var htmlString = `
    <h1 id = "name">${alexObject.firstName}  ${alexObject.lastName}</h1>
    <ul>
        <li id ="Favorite foods">${alexObject.favoriteFoods[0]}</li>
        <li id ="Favorite food 2">${alexObject.favoriteFoods[1]}</li>
        </ul>
    <p id="First job">His first job was as a ${alexObject.firstJob}.</p>
    <p id="Greatest Fear">His greatest fear is ${alexObject.greatestFear}.</p>
    <p id="Secret talents">His secret talent is ${alexObject.secretTalents}.</p>
    <p is "skydiving">He ${alexObject.wouldSkyDive} sky dive.</p>
    <p id="Pet info">He has a ${alexObject.petInfo.type} named ${alexObject.petInfo.name}.</p>

`

var friendContainer = document.querySelector("#personal-website");
friendContainer.innerHTML = htmlString;
