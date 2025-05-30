//load all data from json using link
/*
function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };
    request.open('GET', url, true);
    request.send();
  });
}*/

const url = "https://www.javascripttutorial.net/sample/promise/api.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.message))
  .catch((error) => {
    console.log(`Error getting the message, HTTP status`);
  });
