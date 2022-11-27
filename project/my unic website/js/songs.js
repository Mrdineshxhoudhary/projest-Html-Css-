
var progress = document.getElementById('lodding');
var watsnew01 = document.getElementById('whats-new');
var menulist = document.getElementById('heade400');
var arjit = document.getElementById('a-singh0');
var mainbody = document.getElementById('main-body');
var Artist = document.getElementById('all-sonng-poster');
var watsnew = document.getElementById('whats-new');
var darkweb = document.getElementById('contener-aside');
var darktheemtext = document.getElementById('ul-ano');
var darktheemtext2 = document.getElementById('ul-ano2');
var anologobacg = document.getElementById('ano-logo-bg');
var changer = document.getElementById('text0');
var ctext01 = document.getElementById('text1');
var ctext03 = document.getElementById('text3');
var ctext04 = document.getElementById('text4');
var ctext05 = document.getElementById('text5');
var ctext06 = document.getElementById('text6');
var ctext07 = document.getElementById('text7');
var ctext08 = document.getElementById('text8');
var ctext09 = document.getElementById('text9');
var ctext10 = document.getElementById('text10');

ctext01.style.display = "none";
ctext03.style.display = "none";
ctext04.style.display = "none";
ctext05.style.display = "none";
ctext06.style.display = "none";
ctext07.style.display = "none";
ctext08.style.display = "none";
ctext09.style.display = "none";
ctext10.style.display = "none";
Artist.style.display = "none";
arjit.style.display = "none";
darkweb.style.background = "linear-gradient(216deg, #00ccff7a, #1ab6678a)";
darktheemtext.style.color = "white";
darktheemtext2.style.color = "white";
anologobacg.style.background = "linear-gradient(216deg, rgba(0, 204, 255, 0.48), rgba(26, 182, 103, 0.54))";
// mainbody.style.marginLeft = "100px";
// mainbody.style.marginTop = "80px";
// mainbody.style.display= "block";
darkweb.style.display = "flex";


function loddingh() {
    progress.style.display = ('none');
}
menulist.style.display = "none";
function toggalmenu() {
    if (menulist.style.display == "none") {
        menulist.style.display = "contents";
    }
    else {
        menulist.style.display = "none";
    }
}


function dark() {
    if (darkweb.style.background == "linear-gradient(216deg, #00ccff7a, #1ab6678a)", darktheemtext.style.color == "white", darktheemtext2.style.color == "white",anologobacg.style.background == "linear-gradient(216deg, rgba(0, 204, 255, 0.48), rgba(26, 182, 103, 0.54))") {
        darkweb.style.background = "black";
        darktheemtext.style.color = "black";
        darktheemtext2.style.color = "black";
        anologobacg.style.background = "black";

    }
    else {
        darkweb.style.background = "linear-gradient(216deg, #00ccff7a, #1ab6678a)";
        darktheemtext.style.color = "white";
        darktheemtext2.style.color = "white";
        anologobacg.style.background = "linear-gradient(216deg, rgba(0, 204, 255, 0.48), rgba(26, 182, 103, 0.54))";

    }
}


function watvisibal() {
    changer.style.display = "flex";
}

function wathidebale() {
    changer.style.display = "none";
}


function watvisibal1() {
    ctext01.style.display = "flex";
}

function wathidebale1() {
    ctext01.style.display = "none";
}
function watvisibal2() {
    ctext03.style.display = "flex";
}

function wathidebale2() {
    ctext03.style.display = "none";
}
function watvisibal3() {
    ctext04.style.display = "flex";
}

function wathidebale3() {
    ctext04.style.display = "none";
}
function watvisibal4() {
    ctext05.style.display = "flex";
}

function wathidebale4() {
    ctext05.style.display = "none";
}
function watvisibal5() {
    ctext06.style.display = "flex";
}

function wathidebale5() {
    ctext06.style.display = "none";
}
function watvisibal6() {
    ctext07.style.display = "flex";
}

function wathidebale6() {
    ctext07.style.display = "none";
}
function watvisibal7() {
    ctext08.style.display = "flex";
}

function wathidebale7() {
    ctext08.style.display = "none";
}
function watvisibal8() {
    ctext09.style.display = "flex";
}

function wathidebale8() {
    ctext09.style.display = "none";
}
function watvisibal9() {
    ctext10.style.display = "flex";
}

function wathidebale9() {
    ctext10.style.display = "none";
}





// Artistst
function Artists(){
    if (Artist.style.display == "none", mainbody.style.display == "block" ){
        Artist.style.display = "flex";
        mainbody.style.display = "none"; 
    }
    else{
        Artist.style.display = "flex" ;
        arjit.style.display = "none";
 
    }
}
//    0.2 artists -arijit
function arijitf(){
if(arjit.style.display == "none",Artist.style.display == "flex" ){
    arjit.style.display = "flex";
    Artist.style.display = "none" ;
}
else{
    arjit.style.display = "none";

}
}
// wats new 
document.getElementById('icon00').addEventListener('click', function() {
       if ( mainbody.style.display = "none", Artist.style.display = "flex", arjit.style.display = "flex"){
        mainbody.style.display = "block"; 
        Artist.style.display = "none";
        arjit.style.display = "none";
       }
       });
    


// document.getElementsByClassName("artistsc1").addEventListener('click', function() {
//             alert('Ouch! Stop poking me!');
//             });


// document.querySelector('html').addEventListener('click', function() {
//     alert('Ouch! Stop poking me!');
//    });
// document.getElementsByClassName("artistsc1").addEventListener('click', function() {
//         alert('Ouch! Stop poking me!');
//         });