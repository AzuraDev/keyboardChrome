javascript: var pg1 = 'Hello, Welcome To The Tutorial, press 8 again to continue: ';
var pg2 = 'Use key [1] to replace your current page with google or your preffered link ';
var pg3 = 'Use key [2] to wipe css of many different websites ';
var pg4 = 'Use key [3] to open up a page, keeping the previous page in a different tab ';
var pg5 = 'Use key [4] to refreh the page ';
var pg6 = 'use key [5] to enable https encryption on the website your on ';
var pg7 = 'use key [6] to disable https encryption on the website your on ';
var pg8 = 'use key [7] to select a randon array of websites to go on ';
var pg9 = 'use key [8] to access the tutorial ';
var pg10 = 'use key [9] to change links there are ' + webArray + ' links to change ';
var pg11 = 'use key [0] to set up a password';
var pl1 = 'Change Link 1';
var pl2 = 'Change Link 2';
var pl3 = 'Change Link 3';
var pl4 = 'Change Link 4';12
var pl5 = 'Change Link 5';
var pl6 = 'Change Link 6';
var p1 = 'put password here';
var p2 = 'great';
var google = 'http://www.google.com';
var x = 0;
var y = 0;
var z = 0;
var pgnow = 0;
var pglist = 11;
var plink1;
var plink2;
var plink3;
var plink4;
var plink5;
var plink6;
var webArray;
var safeWebSelector;
var safeWebArray;
var pass;
document.onkeydown = flvsSafeWebScript;

function flvsSafeWebScript(eKey) {
    safeWebArray = new Array();
    safeWebArray[0] = plink1;
    safeWebArray[1] = plink2;
    safeWebArray[2] = plink3;
    safeWebArray[3] = plink4;
    safeWebArray[4] = plink5;
    safeWebSelector = Math.floor(Math.random() * safeWebArray.length);
    webArray = safeWebArray.length + 1;
    if (eKey.keyCode == 49) {
        window.open(plink6);
    } else if (eKey.keyCode == 50) {
        var cssDisablerScript = document.getElementsByTagName('link');
        cssDisablerScript[0].href = "none.css";
    } else if (eKey.keyCode == 51) {
        window.open('http://www.azura.tk');
    } else if (eKey.keyCode == 52) {
        window.location.reload(true);
    } else if (eKey.keyCode == 53 && window.location.protocol != 'https:') {
        window.location.protocol = 'https:';
    } else if (eKey.keyCode == 54 && window.location.protocol == 'https:') {
        window.location.protocol = 'http:';
    } else if (eKey.keyCode == 55) {
        window.location.href = safeWebArray[safeWebSelector];
    } else if (eKey.keyCode == 56) {
        y += 1;
        pgnow += 1;
        if (y == 1 && pgnow == 1) {
            alert(pg1 + pgnow + '/' + pglist);
        } else if (y == 2) {
            alert(pg2 + pgnow + '/' + pglist);
        } else if (y == 3) {
            alert(pg3 + pgnow + '/' + pglist);
        } else if (y == 4) {
            alert(pg4 + pgnow + '/' + pglist);
        } else if (y == 5) {
            alert(pg5 + pgnow + '/' + pglist);
        } else if (y == 6) {
            alert(pg6 + pgnow + '/' + pglist);
        } else if (y == 7) {
            alert(pg7 + pgnow + '/' + pglist);
        } else if (y == 8) {
            alert(pg8 + pgnow + '/' + pglist);
        } else if (y == 9) {
            alert(pg9 + pgnow + '/' + pglist);
        } else if (y == 10) {
            alert(pg10 + pgnow + '/' + pglist);
        } else if (y == 11) {
            pass = prompt(pg11 + pgnow + '/' + pglist);
        } else if (y > 11) {
            y = 0;
            pgnow = 0;
        }
    } else if (eKey.keyCode == 57) {
        z += 1;
        if (z == 1) {
            plink1 = prompt(pl1);
        } else if (z == 2) {
            plink2 = prompt(pl2);
        } else if (z == 3) {
            plink3 = prompt(pl3);
        } else if (z == 4) {
            plink4 = prompt(pl4);
        } else if (z == 5) {
            plink5 = prompt(pl5);
        } else if (z == 6) {
            plink6 = prompt(pl6);
        } else if (z > 6) {
            z = 0;
        }
    } else if (eKey.keyCode == 48) {
        var passScript = pass;
        var passScriptArea = prompt(p1);
        if (passScript == passScriptArea)
            alert(p2);
        else {
            window.location = google;

        }
    }
}
