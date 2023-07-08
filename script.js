console.log("Connected");
let start = document.querySelector(".startButton");
let exitButton = document.querySelector(".exitButton");
let mainPage = document.querySelector(".mainPage");
let startPage = document.querySelector(".startPage")

start.onclick = function() {
    console.log("working");
    startPage.style.display = "none";
    mainPage.style.display = "block";
  };

  
  
