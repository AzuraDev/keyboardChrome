javascript:
var x = 0;
document.onkeydown = SafeWebScript;
function SafeWebScript(eKey){
  if(eKey.keyCode == 49){
    window.location.href = 'http://www.google.com';
  }else if(eKey.keyCode == 50){
    var cssDisablerScript = document.getElementsByTagName('link');
    cssDisablerScript[0].href = "none.css";
  }else if(eKey.keyCode == 51){
    window.open('http://www.google.com');
  }else if(eKey.keyCode == 52){
    window.location.reload(true);
  }else if(eKey.keyCode == 53 && window.location.protocol != 'https:'){
    window.location.protocol = 'https:';
  }else if(eKey.keyCode == 54 && window.location.protocol == 'https:'){
    window.location.protocol = 'http:';
  }
}
4
