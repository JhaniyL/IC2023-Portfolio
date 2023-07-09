
let start = document.querySelector(".startButton");
let exitButton = document.querySelector(".exitButton");
let mainPage = document.querySelector(".mainPage");
let startPage = document.querySelector(".startPage");
let loadingScrn=document.querySelector(".loadingScrn");
let backButton=document.querySelector(".backButton");


start.onclick = function() {
  
    startPage.style.display = "none";
    
    mainPage.style.display = "block";
  };

  backButton.onclick = function() {
    startPage.style.display = "none";
    
    mainPage.style.display = "block";
  };     


  function togglePopUp(popUpId) {
    var x = document.getElementById(popUpId);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }





