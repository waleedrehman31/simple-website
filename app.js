"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  var className = document.body.className;
  if (className == "light-theme") {
    switcher.innerText = "Switch to Dark theme";
    this.textContent = "Dark";
  } else {
    switcher.innerText = "Switch to Light theme";
    this.textContent = "Light";
  }
  console.log("current class name: " + className);
});
