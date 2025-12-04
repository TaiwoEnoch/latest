const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("open");
});

// Hero Slider Logic
// SLIDER LOGIC
let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("nextBtn").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
};

document.getElementById("prevBtn").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
};


// SCROLL REVEAL
const revealElements = document.querySelectorAll(".slide-up, .zoom-in, .review-card");

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// SCROLL REVEAL EFFECT
// const showElements = document.querySelectorAll(".reveal, .slide-up, .zoom-in, .mv-card, .team-card, .cta-banner");

// function showOnScroll() {
//     showElements.forEach(el => {
//         const elementTop = el.getBoundingClientRect().top;
//         if (elementTop < window.innerHeight - 100) {
//             el.classList.add("active");
//         }
//     });
// }

// window.addEventListener("scroll", showOnScroll);
// window.addEventListener("load", showOnScroll);


// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



// SCROLL ANIMATION Contct
// const faders = document.querySelectorAll('.fade-up');

// const appearOptions = {
//     threshold: 0.3
// };

// const appearOnScroll = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("appear");
//             observer.unobserve(entry.target);
//         }
//     });
// }, appearOptions);

// faders.forEach(fade => appearOnScroll.observe(fade));
// END OF SCRIPT