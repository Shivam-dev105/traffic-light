// light select
let redLight = document.querySelector("#light-red");
let yellowLight = document.querySelector("#light-yellow");
let greenLight = document.querySelector("#light-green");

// btn select
let redBtn = document.querySelector(".btn-red");
let yellowBtn = document.querySelector(".btn-yellow");
let greenBtn = document.querySelector(".btn-green");

// icon select
let redIcon = document.querySelector("#red-icon");
let yellowIcon = document.querySelector("#yellow-icon");
let greenIcon = document.querySelector("#green-icon");

// reset light
function resetLights() {
  redLight.style.backgroundColor = "rgba(255, 1, 1, 0.3)";
  yellowLight.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
  greenLight.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
}

// red button icon function
function redIconFn() {
  redIcon.className = "bi bi-stop-circle-fill";
  yellowIcon.className = "";
  greenIcon.className = "";
}

// yellow button icon function
function yellowIconFn() {
  redIcon.className = "";
  yellowIcon.className = "bi bi-exclamation-circle-fill";
  greenIcon.className = "";
}

// green button icon function
function greenIconFn() {
  redIcon.className = "";
  yellowIcon.className = "";
  greenIcon.className = "bi bi-play-circle-fill";
}

// red button
redBtn.addEventListener("click", function () {
  resetLights();

  if (true) {
    redLight.style.backgroundColor = "rgba(255, 1, 1, 0.3)";
    redIconFn();
  }
});

// yellow button
yellowBtn.addEventListener("click", function () {
  resetLights();

  if (true) {
    yellowLight.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
    yellowIconFn();
  }
});

// green button
greenBtn.addEventListener("click", function () {
  resetLights();

  if (true) {
    greenLight.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
    greenIconFn();
  }
});
