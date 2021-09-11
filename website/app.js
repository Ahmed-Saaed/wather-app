/* Global Variables */
let baseURL = "http://api.weather.org/data/?zipcode=";
let apiKey = "&appid=9f15e45060...";

document.getElementById("generate").addEventListener("click", myAction);

function myAction(event) {
  let zipCode = document.getElementById("zip").value;
  getZip(baseURL, zipCode, apiKey);
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

postData("/weather", {
  fav: "lion",
  fact: "they are awesome",
  size: "really big",
});

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
