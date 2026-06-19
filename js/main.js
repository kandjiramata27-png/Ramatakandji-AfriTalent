
/* NAVBAR SCROLL */

const navbar = document.querySelector("#navbar1");

window.addEventListener("scroll", () => {

if(window.scrollY > 100){
navbar.classList.add("navbarScroll");
}else{
navbar.classList.remove("navbarScroll");
}

});


/* BOUTON RETOUR EN HAUT */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

/* darkmode */

let darkmode = document.getElementById('darkModeBtn');

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark');

});    

           




   