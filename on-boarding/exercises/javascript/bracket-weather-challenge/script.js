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

  var cloudy = weatherData['query']['results']['channel']['item']['forecast'][2]['text'].toLowerCase();
  
   let nomeSunrise = weatherData['query']['results']['channel']['astronomy']['sunrise'];
  console.log(nomeSunrise);

  console.log(weatherData['query']['results']['channel']['wind']['chill'])

  console.log(weatherData['query']['results']['channel']['atmosphere']['visibility']);

  console.log(weatherData['query']['results']['channel']['item']['forecast'][2]['high']);

  console.log(`${weatherData['query']['results']['channel']['item']['forecast'][2]['date']} will be ${cloudy} with a high of ${weatherData['query']['results']['channel']['item']['forecast'][2]['high']} and a low of ${weatherData['query']['results']['channel']['item']['forecast'][2]['low']}.`);

  console.log(typeof(weatherData['query']['results']['channel']['item']['forecast'][2]['high']));

 var thuForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][0]['high']);
 var friForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][1]['high']);
 var satForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][2]['high']);
 var sunForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][3]['high']);
 var monForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][4]['high']);
 var tueForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][5]['high']);
 var wedForecast = parseInt(weatherData['query']['results']['channel']['item']['forecast'][6]['high']);

 var averageHigh = (thuForecast + friForecast + satForecast + sunForecast + monForecast + tueForecast + wedForecast) / 7;

 console.log(averageHigh);

