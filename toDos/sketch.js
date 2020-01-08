var gkModal = document.getElementById("myGkModal");
var sDr = document.getElementById("sDrinks");
var gkGr = document.getElementById("GKgr");
var captionText=document.getElementById("caption");
var lau = document.getElementById("lau");
var lauModal = document.getElementById("lauModal");
var lauGr = document.getElementById("lauGr");

sDr.onclick = function(){
  gkModal.style.display = "block";
  gkGr.scr = this.src;
  captionText.innerHTML = this.alt;
}

lau.onclick = function(){
  lauModal.style.display = "block";
  lauGr.scr = this.src;
  // captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];
span.onclick =function(){
  gkModal.style.display = "none";
}

var span = document.getElementsByClassName("close")[1];
span.onclick =function(){
  lauModal.style.display = "none";
}