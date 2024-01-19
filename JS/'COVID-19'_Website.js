let menu = document.querySelector("#menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("shownav")
})