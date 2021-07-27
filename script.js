{
    AOS.init();

let menu = document.querySelector(".menu");
let link = document.querySelectorAll(".link");
let hamburger = document.getElementById("hamburger");
let closing = document.getElementById("close");

hamburger.addEventListener('click', openMenu);
link.forEach(n => n.addEventListener("click", closeMenu));
closing.addEventListener('click',closeMenu);



function openMenu() {
    menu.classList.add("showmenu");
    closing.style.display = "block";
};

function closeMenu(){
    menu.classList.remove("showmenu");
    closing.style.display = "";
    console.log("clicked!");
};

function clickGit() {
        location.href = "https://apitongcm-cv.netlify.app/";

};


}    