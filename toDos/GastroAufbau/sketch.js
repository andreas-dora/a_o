var img0 = document.getElementById("id_img0");
var mod0 = document.getElementById("id_modal0");
var imgL0 =document.getElementById("id_imgL0");

img0.addEventListener("click", openMod0);

function openMod0(){
  mod0.style.display = "block";
  imgL0.scr = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
  span.onclick =function(){
  mod0.style.display = "none";
}