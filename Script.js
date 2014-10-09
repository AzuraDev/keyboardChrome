javascript: document.onkeydown = safeWeb;
function safeWeb(e){
  if(e.keyCode == 49){
  window.open('http://www.google.com');
}
}
