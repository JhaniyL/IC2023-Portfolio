let back = document.querySelector(".backButton");
let mainPage=document.querySelector(".mainPage");
let phonePage=document.querySelector(".phonePage")



back.onclick = function() {
  
    phonePage.style.display = "none";
    
    mainPage.style.display = "block";
  };