document
  .getElementById("loadjson")
  .addEventListener("click", loadJson);
document
  .getElementById("loadpriorcountry")
  .addEventListener("click", loadPriorCountry);
document
  .getElementById("loadnextcountry")
  .addEventListener("click", loadNextCountry);

let country = 0
let json

function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("Country").innerHTML 
            = "JSON data loaded.";
          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

function loadPriorCountry () {
  country--
  if (country < 0) 
    country = 0
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}
function loadNextCountry () {
  country++
  if (country > json.Countries.length - 1) 
    country = json.Countries.length - 1
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}
