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

// search function

var productContainer = document.getElementById("ProductContainer");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");


search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase();

    for(count=0; count < productList.length; count = count+1)
    {
        var productName = productList[count].querySelector("h1").textContent;

        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none";
        }
        else{
            productList[count].style.display="block";
        }
    }
})

