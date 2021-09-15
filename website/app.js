/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = `&appid=7699888812ddd206b2ad73e85cacb50d`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', myAction);

async function myAction(event) {
  let zipCode = document.getElementById('zip').value;
  let feeling = document.getElementById('feelings').value;
  let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  console.log(isValidZip.test(10001))
    // alert trriger on invalid zip code -works only for US zip code-

    function isValid() {
      isValidZip.test(zipCode)
        ? true
        : window.alert('404 ,kindly enter a valid zip code');
    }
    
  isValid();

  getWeather(baseURL, zipCode, apiKey)
    //chain promises
    .then((data) => {
      // Add data
      console.log(data.name);
      postData('/add', {
        date: newDate,
        city: data.name,
        weather: data.main.temp,
        feeling: feeling,
      });
    })
    .then((e)=> getData())
    .then((myData)=> updateUI(myData));
}

// get the weather data from our api using async get function
const getWeather = async (baseURL, zip, key) => {
  const response = await fetch(`${baseURL}${zip}${key}&units=metric`);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

// our async function that will post all our data to the route

const postData = async (url = '', data = {}) => {
  try {
    let res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match the header
    });
  } catch (error) {
    console.log('error', error);
  }
};

const getData = async () =>{
  const dataRes = await fetch('all', {   
    method: 'GET',
    credentials: 'same-origin',
  })
  try{
    const myData = await dataRes.json();
    console.log(myData)
    return myData;
  }catch(error){
    console.log('error', error)
  }
}

// update ui function
const updateUI = async (myData) => {
  try{
    document.getElementById('date').innerHTML = `Date: ${myData.date}`;
    document.getElementById(
      'temp'
    ).innerHTML = ` the weather today: ${myData.weather}`;
    document.getElementById(
      'content'
    ).innerHTML = `I am feeling  ${myData.feeling} today`;
    document.getElementById(
      'city'
    ).innerHTML = `your City is : ${myData.city}`;
    }catch(error){
      console.log("error")
    }
  }

//add widget from weather api
document.getElementById('btn').addEventListener('click', (e) => {
  let cityID = document.getElementById('id').value;
  window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
  window.myWidgetParam.push({
    id: 5,
    cityid: cityID,
    appid: '7699888812ddd206b2ad73e85cacb50d',
    units: 'metric',
    containerid: 'openweathermap-widget-5',
  });
  (function () {
    var script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src =
      '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  })();
});
