// testing the async function
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match Content-Type' header
  });

  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/** postData("/weather", {
  fav: "lion",
  fact: "they are awesome",
  size: "really big",
});
*/

//testing how the copy object and the assign works
newEntry = {
  date: new Date(),
  weather: 2000,
  feeling: "happy"
}

projectData = {}

projectData = JSON.parse(JSON.stringify(newEntry));
console.log(projectData);

document.getElementById('date').innerHTML = `Date: ${projectData.date}`;
document.getElementById(
  'temp'
).innerHTML = ` the weather today:${projectData.weather}`;
document.getElementById(
  'content'
).innerHTML = `I am feeling ${projectData.feeling} today`;

console.log(document.getElementById('date').innerHTML)
