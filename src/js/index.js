import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
const tday = document.querySelector("#today");
tday.value = `${currentDate}`;

const dropdown = document.querySelector("#temperature");
for (let i = -20; i <= 65; i++) {
  const option = document.createElement("option");
  option.text = `${i} °C`;
  option.value = i;
  dropdown.options.add(option);
}
dropdown.value = 25; //default temperature

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  const forDay = document.querySelector("#today").value;
  const temperature = document.querySelector("#temperature").value;
  const feeling = document.querySelector("input[name=feeling]:checked").value;
  const isSun = document.querySelector("#Sun").checked;
  const isCloud = document.querySelector("#Cloud").checked;

  let result = `Temperatura na dzień ${forDay}:`;
  let howIs = "";
  let howIsMulti = "";

  if (forDay < date.toISOString().slice(0, 10)) {
    (howIs = `było`), (howIsMulti = `były`);
  } else if (forDay == date.toISOString().slice(0, 10)) {
    (howIs = `jest`), (howIsMulti = `są`);
  } else {
    (howIs = `będzie`), (howIsMulti = `będą`);
  }

  result += ` ${howIs} ${temperature} °C, odczuwalnie ${howIs} ${feeling}.`;
  if (isCloud && !isSun) result += ` Na niebie ${howIsMulti} chmury.`;
  else if (!isCloud && isSun) result += ` Na niebie ${howIs} słońce.`;
  else if (isCloud && isSun)
    result += ` Na niebie ${howIsMulti} chmury ale ${howIs} też słońce.`;

  const weatherBox = document.querySelector(".weather");
  weatherBox.innerHTML = result;
  //console.log(result);
});
