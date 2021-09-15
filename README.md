# Weather-Journal App Project

this is an asynchronous web app that uses Web API and user data to dynamically update the UI.

## steps

- server side :
  - get the node environment ready using express,body parser and cors
  - runnig the server at the desired portable
  - creating GET and POST requests routes
    - client side :
    - set the local varibals from the api [open_weather_map](https://openweathermap.org/current#zip)

    - other referenses on how to deal with api data :

    - nour elhomsi channel -[how to copy an object](https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/)
    - set the event listener on generate button
    - a chain function between getting the date (the weather) and posting the data and then update the ui
    - a widget to display the weather dynamically served by the openweathermap

## problems

 -axios is not defined no matter what I do 
    - I invoked it with require tried to import it in the app.js ..everything
    - see the code at test.js 

- I am pretty sure that the code run in the correct way ..and everything works in the terminal
but the first click is always undefiend but then works .. I believe it is not a code problem 

i watched the wepnar it is exactly the same logic and when I tried his way it gave me the same results
    -refer to that in temp & testing branch -