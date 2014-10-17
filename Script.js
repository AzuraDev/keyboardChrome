javascript:
var x = 0;
var y = 0;
var pgnow = 0;
var pglist = 9;
var link1 = 'http://www.flvs.net';
var link2 = 'http://www.azura.tk';
var link3 = 'http://www.gmail.com';
var link4 = 'http://www.yahoo.com';
var link5 = 'http://www.google.com';
var pg1 = 'Hello, Welcome To The Tutorial, press 8 again to continue: ';
var pg2 = 'Use key [1] to replace your current page with google or your preffered link ';
var pg3 = 'Use key [2] to wipe css of many different websites ';
var pg4 = 'Use key [3] to open up a page, keeping the previous page in a different tab ';
var pg5 = 'Use key [4] to refreh the page ';
var pg6 = 'use key [5] to enable https encryption on the website your on ';
var pg7 = 'use key [6] to disable https encryption on the website your on ';
var pg8 = 'use key [7] to select a randon array of websites to go on ';
var pg9 = 'use key [8] to access the tutorial ';
var safeWebArray = new Array();
safeWebArray[0] = link1;
safeWebArray[1] = link2;
safeWebArray[2] = link3;
safeWebArray[3] = link4;
var safeWebSelector = Math.floor(Math.random() * safeWebArray.length);

document.onkeydown = flvsSafeWebScript;
function flvsSafeWebScript(eKey){
  if(eKey.keyCode == 49){
    window.location.href = link5;
  }else if(eKey.keyCode == 50){
    var cssDisablerScript = document.getElementsByTagName('link');
    cssDisablerScript[0].href = "none.css";
  }else if(eKey.keyCode == 51){
    window.open('http://www.azura.tk');
  }else if(eKey.keyCode == 52){
    window.location.reload(true);
  }else if(eKey.keyCode == 53 && window.location.protocol != 'https:'){
    window.location.protocol = 'https:';
  }else if(eKey.keyCode == 54 && window.location.protocol == 'https:'){
    window.location.protocol = 'http:';
  }else if(eKey.keyCode == 55){
    window.location.href = safeWebArray[safeWebSelector];
  }else if(eKey.keyCode == 56){
    y += 1;
    pgnow += 1;
    if(y == 1 && pgnow == 1){
      alert(pg1 + pgnow + '/' + pglist);
    }else if(y == 2){
      alert(pg2 + pgnow + '/' + pglist);
    }else if(y == 3){
      alert(pg3 + pgnow + '/' + pglist);
    }else if(y == 4){
      alert(pg4 + pgnow + '/' +pglist);
    }else if(y == 5){
      alert(pg5 + pgnow + '/' + pglist);
    }else if(y == 6){
      alert(pg6 + pgnow + '/' + pglist);
    }else if(y == 7){
      alert(pg7 + pgnow + '/' + pglist);
    }else if(y == 8){
      alert(pg8 + pgnow + '/' + pglist);
    }else if(y == 9){
      alert(pg9 + pgnow + '/' + pglist);
    }
  }
}
