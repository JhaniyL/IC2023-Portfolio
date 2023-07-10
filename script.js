

let start = document.querySelector(".startButton");
let exitButton = document.querySelector(".exitButton");
let mainPage = document.querySelector(".mainPage");
let startPage = document.querySelector(".startPage");
let loadingScrn = document.querySelector("#loadingScrn");


  start.onclick = function() {
    startPage.style.display = "none";
    loadingScrn.style.display = "block";

    setTimeout(function() {
        loadingScrn.style.display = "none"; 
        mainPage.style.display = "block"; 
    }, 3000); 
};

  function togglePopUp(popUpId) {
    var x = document.getElementById(popUpId);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }





