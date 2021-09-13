/* Global Variables */
let baseURL = "http://api.weather.org/data/?zipcode=";
const apiKey = "&appid=9f15e45060...";

document.getElementById("generate").addEventListener("click", myAction);

function myAction(event) {
  let zipCode = document.getElementById("zip").value;
  getZip(baseURL, zipCode, apiKey);
}
//chain promises
getWeather("/weather")
  .then(function (data) {
    // Add data
    console.log(data);
    postData("/weather", {});
  })
  .then(updateUI());
// update ui function
const updateUI = async () => {
  const request = await fetch("/weather");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData[0].animal;
    document.getElementById("temp").innerHTML = allData[0].facts;
    document.getElementById("content").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};

// testing the async function
const getZip = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);

  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
