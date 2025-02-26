let nav = document.querySelector("nav");
let lists = document.querySelectorAll(".nav-list-item");
let menu = document.querySelector(".menu");
let state = false;

menu.addEventListener("click", ()=>{
    nav.classList.toggle("transform");
    state = !state;
    state ? menu.src = './images/menu-close.svg' : menu.src = './images/icon-hamburger.svg';
})

lists.forEach((list)=>{
    list.addEventListener("click",(e)=>{
        let subMenuName = e.target.innerText.toLowerCase();
        let subList = document.querySelector("."+subMenuName);
        subList.classList.toggle("open");
    })
})