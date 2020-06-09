
window.onload = function(){
var myIndex = 0;
var imgArray = ["unsplash-bed1.jpg","bed2.jpg","bed3.jpg","bed4.jpg"];
var backgroundImg = document.getElementById("header");


function carousel() {
  myIndex++;
  if (myIndex > 3) {myIndex = 0}    
  backgroundImg.style.backgroundImage=`url(Resources/${imgArray[myIndex]})`; 
  setTimeout(carousel, 4000); // Change image every 2 seconds
}
carousel();
}