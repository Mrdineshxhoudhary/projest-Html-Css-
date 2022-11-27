const Rclick = document.querySelector(".Rcls"),
 shareMenu = document.querySelector(".left");

document.addEventListener("contextmenu", e => {
    console.log("tou are right click");
        e.preventDefault();

    let x = e.offsetX , y = e.offsetY ,
     winwidth = window.innerWidth , 
     winHeight = window.innerHeight , 
     cmwidth = Rclick.offsetWidth,
     cmHeight = Rclick.offsetHeight ;
    if(x > (winwidth - cmwidth - shareMenu.offsetWidth)){
        shareMenu.style.right = "100%";
    }
    else{
        // shareMenu.style.right = "";
        shareMenu.style.right = "-100%";

    }
    x = x > winwidth - cmwidth ? winwidth - cmwidth : x ;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
   
    Rclick.style.left = `${x}px`;
    Rclick.style.top = `${y}px`;

    Rclick.style.visibility = "visible";

});
document.addEventListener("click", () => Rclick.style.visibility = "hidden");