
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

           

/* fade-in */
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);

                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
});

    counters.forEach((counter) => {
    counterObserver.observe(counter);
});

    const filterButtons = document.querySelectorAll(".filter-btn");
    const freelancerCards = document.querySelectorAll(".freelancer-card");

    filterButtons.forEach(button => {
    button.addEventListener("click", () => {

    const category = button.dataset.category;

    freelancerCards.forEach(card => {

      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });
});



/* FORMULAIRE CONTACT */


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

       
        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        
        document.getElementById("nomError").textContent = "";
        document.getElementById("prenomError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";

        document.getElementById("successMessage").textContent = "";


        let valide = true;

        
        if (nom.value.trim() === "") {
            document.getElementById("nomError").textContent = "Le nom est obligatoire";
            valide = false;
        }

        
        if (prenom.value.trim() === "") {
            document.getElementById("prenomError").textContent = "Le prénom est obligatoire";
            valide = false;
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {
            document.getElementById("emailError").textContent = "Email invalide";
            valide = false;
        }

         
    
        
        if (message. value.trim().length < 20) {
            document.getElementById("messageError").textContent =
            "Le message doit contenir au moins 20 caractères";
            valide = false;
        }

        
        if (valide) {

            document.getElementById("successMessage").textContent =
            "Merci ! Votre message a été envoyé avec succès.";
           
            contactForm.reset();
        }

    });

}


   