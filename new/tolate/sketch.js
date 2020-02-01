
var i = 0;
var txt = 'Uh, äh, sorry, sorry, aber Du bist viel zu spät. die Gästeliste ist schon längst geschlossen. MAch dir keinen Kopf: Die nächste Party kommt bestimmt. Vielleicht schaffst Du es dann. Nur mut...'; /* The text */
var speed = 70; 
function write() {
  if (i < txt.length) {
    document.getElementById("robo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(write, speed);
  }
}