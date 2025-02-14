var menu = document.getElementById("menu");
var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closenav");
var overlay = document.getElementById("overlay")

menu.addEventListener("click",function(){
    sidenav.style.right=0;
    overlay.style.display="block";
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%";
    overlay.style.display="none";
})