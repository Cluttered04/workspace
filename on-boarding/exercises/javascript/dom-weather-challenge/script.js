var weatherData = {
    "query": {
     "count": 1,
     "created": "2018-12-06T20:52:22Z",
     "lang": "en-US",
     "results": {
      "channel": {
       "units": {
        "distance": "mi",
        "pressure": "in",
        "speed": "mph",
        "temperature": "F"
       },
       "title": "Yahoo! Weather - Nome, AK, US",
       "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
       "description": "Yahoo! Weather for Nome, AK, US",
       "language": "en-us",
       "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
       "ttl": "60",
       "location": {
        "city": "Nome",
        "country": "United States",
        "region": " AK"
       },
       "wind": {
        "chill": "14",
        "direction": "68",
        "speed": "36"
       },
       "atmosphere": {
        "humidity": "90",
        "pressure": "989.0",
        "rising": "0",
        "visibility": "11.0"
       },
       "astronomy": {
        "sunrise": "11:38 am",
        "sunset": "4:7 pm"
       },
       "image": {
        "title": "Yahoo! Weather",
        "width": "142",
        "height": "18",
        "link": "http://weather.yahoo.com",
        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
       },
       "item": {
        "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
        "lat": "64.499474",
        "long": "-165.405792",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
        "condition": {
         "code": "15",
         "date": "Thu, 06 Dec 2018 11:00 AM AKST",
         "temp": "28",
         "text": "Blowing Snow"
        },
        "forecast": [
         {
          "code": "16",
          "date": "06 Dec 2018",
          "day": "Thu",
          "high": "29",
          "low": "25",
          "text": "Snow"
         },
         {
          "code": "26",
          "date": "07 Dec 2018",
          "day": "Fri",
          "high": "27",
          "low": "22",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "08 Dec 2018",
          "day": "Sat",
          "high": "22",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "34",
          "date": "09 Dec 2018",
          "day": "Sun",
          "high": "7",
          "low": "-11",
          "text": "Mostly Sunny"
         },
         {
          "code": "28",
          "date": "10 Dec 2018",
          "day": "Mon",
          "high": "3",
          "low": "-11",
          "text": "Mostly Cloudy"
         },
         {
          "code": "28",
          "date": "11 Dec 2018",
          "day": "Tue",
          "high": "10",
          "low": "2",
          "text": "Mostly Cloudy"
         },
         {
          "code": "26",
          "date": "12 Dec 2018",
          "day": "Wed",
          "high": "9",
          "low": "5",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "13 Dec 2018",
          "day": "Thu",
          "high": "14",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "30",
          "date": "14 Dec 2018",
          "day": "Fri",
          "high": "13",
          "low": "-3",
          "text": "Partly Cloudy"
         },
         {
          "code": "30",
          "date": "15 Dec 2018",
          "day": "Sat",
          "high": "7",
          "low": "-3",
          "text": "Partly Cloudy"
         }
        ],
        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
        "guid": {
         "isPermaLink": "false"
        }
       }
      }
     }
    }
   }


var htmlString = `
   <h1 id = "location">City:${weatherData.query.results.channel.location.city}, Country: ${weatherData.query.results.channel.location.country}, Region: ${weatherData.query.results.channel.location.region}</h1>
    <h2 id ="conditions">${weatherData.query.results.channel.item.condition.temp} and ${weatherData.query.results.channel.item.condition.text}</h2>
`

var forecastString = `
   <div class = "forecast-Friday">
        <h3 id = "day-and-date">${weatherData.query.results.channel.item.forecast[1].date} ,  ${weatherData.query.results.channel.item.forecast[2].day}</h3>
        <p id ="high temperature">${weatherData.query.results.channel.item.forecast[1].high}</p>
        <p id ="low temperature">${weatherData.query.results.channel.item.forecast[1].low}</p>
        <p id = "conditions">${weatherData.query.results.channel.item.forecast[1].text}</p>
    </div>
    <div class = "forecast-Saturday">
        <h3 id = "day-and-date">${weatherData.query.results.channel.item.forecast[2].date} ,  ${weatherData.query.results.channel.item.forecast[2].day}</h3>
        <p id ="high temperature">${weatherData.query.results.channel.item.forecast[2].high}</p>
        <p id ="low temperature">${weatherData.query.results.channel.item.forecast[2].low}</p>
        <p id = "conditions">${weatherData.query.results.channel.item.forecast[2].text}</p>
    </div>
    <div class = "forecast-Sunday">
        <h3 id = "day-and-date">${weatherData.query.results.channel.item.forecast[3].date} ,  ${weatherData.query.results.channel.item.forecast[2].day}</h3>
        <p id ="high temperature">${weatherData.query.results.channel.item.forecast[3].high}</p>
        <p id ="low temperature">${weatherData.query.results.channel.item.forecast[3].low}</p>
        <p id = "conditions">${weatherData.query.results.channel.item.forecast[3].text}</p>
    </div>
   `



var weatherContainer = document.querySelector("#current-weather");
weatherContainer.innerHTML = htmlString;

var forecastContainer = document.querySelector("#weather-forecast");
forecastContainer.innerHTML = forecastString;
