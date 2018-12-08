var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releasedate: "May 25, 1977"
  }

  var sectionContainer = document.querySelector("#movieObject");
  var titleContainer = document.querySelector("#title");
  var genreContainer = document.querySelector("#genre");
  var releasedateContainer = document.querySelector("#release-date");

titleContainer.innerHTML = movieObject.title;
genreContainer.innerHTML = movieObject.genre;
releasedateContainer.innerHTML = movieObject.releasedate;

var HTMLString = `
  <h1>${movieObject.title}</h1>
  <h2>${movieObject.genre}</h2>
  <h3>${movieObject.releasedate}</h3>
`

