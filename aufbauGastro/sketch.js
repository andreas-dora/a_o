const img0 = document.getElementById("id_img0");
const mod0 = document.getElementById("id_modal0");
const imgL0 =document.getElementById("id_imgL0");
const nav = document.getElementById("bNav");

window.onscroll = function() {scrolFun()};

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


function scrolFun(){
  if(document.body.scrollTop > 310 || document.documentElement.scrollTop > 310 ){
    nav.style.bottom ="0";
  } else {
    nav.style.bottom = "-60px";
  }
}