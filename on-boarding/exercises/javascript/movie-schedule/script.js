var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
  ]

  
//   var scheduleContainer = document.querySelector("#movieSchedule");
  
var htmlString = `
    <section id='Ralph Breaks the Internet'>${movieSchedule[0].title}</section>
    <h1 id = 'PG'>${movieSchedule[0].rating}</h1>
    <img src ='https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true'>

    <section id='The Grinch'>${movieSchedule[1].title}</section>
    <h1 id='G'>${movieSchedule[1].rating}</h1>
    <img src='https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg'>

    <section id='Fantastic Beasts: The Crimes of Grindlewald'>${movieSchedule[2].title}</section>
    <h1 id='PG-13'>${movieSchedule[2].rating}</h1>
    <img src='https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg'>
    `

var movieContainer = document.querySelector("#movieSchedule");
movieContainer.innerHTML = htmlString;
