// ------------------Preloader------------------
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
   loader.style.display = "none";
})


// ------------------Slide Nav------------------
var menuBtn = document.getElementById("menuBtn")
var slideNav = document.getElementsByClassName("slideNav")
var menu = document.getElementById("menu")
slideNav[0].style.right = "-270px";
menuBtn.onclick = function(){
    if(slideNav[0].style.right == "-270px"){
        slideNav[0].style.right = "0";
        menu.src = "image/close.png";
    }
    else{
        slideNav[0].style.right = "-270px";
        menu.src = "image/menu.png";
    }
}

// ------------------Progress bar------------------
document.addEventListener("DOMContentLoaded", function () {
    let progress = document.querySelector('.progress-bar')
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
        let progressHeight = (window.pageYOffset / totalHeight)*100;
        progress.style.height = progressHeight + "%";
    }
})

// ------------------Cursor------------------
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})

// ------------------Theme------------------
{
    let checkBox = document.querySelector('#checkbox');
    let body = document.querySelector('body')
    checkBox.onclick = function(){
        body.classList.toggle('on');
    }
}
    