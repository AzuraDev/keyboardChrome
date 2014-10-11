javascript:
var x = 0;
document.onkeydown = flvsScript;
function flvsScript(e){
  if(e.keyCode == 49){
    window.location.href = 'http://www.flvs.com';
  }else if(e.keyCode == 50){
    var css = document.getElementsByTagName('link');
    css[0].href = "none.css";
  }else if(e.keyCode == 51){
    window.open('http://www.google.com');
  }else if(e.keyCode == 52){
    window.location.reload(true);
  }
}
