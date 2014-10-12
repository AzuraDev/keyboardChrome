javascript:
var x = 0;
document.onkeydown = flvsSafeWebScript;
function flvsSafeWebScript(eKey){
  if(eKey.keyCode == 49){
    window.location.href = 'http://www.flvs.com';
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
}else if(eKey.keyCode == 55){
  x = 1;
  while(x == 1){
    window.open('https://www.azura.tk');
  }
}
}
