/* Global Variables */
let baseURL = "https://v1.nocodeapi.com/projectdata/ow/TZTKxEGvDvUGsayq";
const apiKey = "7699888812ddd206b2ad73e85cacb50d";

document.getElementById("generate").addEventListener("click", myAction);

function myAction(event) {
  let zipCode = document.getElementById("zip").value;
  let feeling = document.getElementById("feelings");

  getZip(baseURL, zipCode, apiKey);

  //chain promises
  getWeather("/add")
    .then(function (data) {
      // Add data
      console.log(data);
      postData("/add", {});
    })
    .then(updateUI());
}

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

// update ui function
const updateUI = async () => {
  const request = await fetch("/weather");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData[0].d;
    document.getElementById("temp").innerHTML = allData[0].weather;
    document.getElementById("content").innerHTML = allData[0].feeling;
  } catch (error) {
    console.log("error", error);
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
