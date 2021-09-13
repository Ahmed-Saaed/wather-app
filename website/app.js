/* Global Variables */
let baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "7699888812ddd206b2ad73e85cacb50d";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", myAction);

function myAction(event) {
  let zipCode = document.getElementById("zip").value;
  let feeling = document.getElementById("feelings").value;

  getWeather(baseURL, zipCode, apiKey)
    //chain promises
    .then((data) => {
      // Add data
      console.log(data);
      postData("/add", { date: d, /*weather: ,*/ feeling: feeling });
    })
    .then(updateUI());
}

// get the weather data from our api using async get function
const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);

  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// our async function that will post all our data to the route

let postData = async (url = "", data = {}) => {
  let res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match the header
  });

  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// update ui function
const updateUI = async () => {
  const request = await fetch("/weather");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = `Date: ${allData[0].d}`;
    document.getElementById(
      "temp"
    ).innerHTML = ` the weather today:${allData[0].weather}`;
    document.getElementById(
      "content"
    ).innerHTML = `I am feeling ${allData[0].feeling}`;
  } catch (error) {
    console.log("error", error);
  }
};
