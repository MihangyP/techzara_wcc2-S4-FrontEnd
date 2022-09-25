//variables
const burger = document.querySelector('.burger-nav');
const nav = document.querySelector('nav');
const navBg = document.querySelector('.nav-bg');
const links = document.querySelectorAll('nav a:not(.login)');
const hero = document.querySelector('.hero');
const accueil = document.querySelector('.accueil');






//listener
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    navBg.classList.toggle('active');
    burger.classList.toggle('active');
    hero.classList.toggle('active');
    accueil.classList.toggle('active');
    if(nav.classList.contains('active')) {
        Array.from(burger.children).forEach((child) => {
            child.style.backgroundColor = '#FFFFFF';
         }); 
    } else {
        Array.from(burger.children).forEach((child) => {
            child.style.backgroundColor = '#000000';
         });
    }
});

for(const link of links) {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            if(link.parentElement.querySelector('.active') !== null) {
                link.parentElement.querySelector('.active').classList.remove('active');
            }
            link.classList.add('active');
            nav.classList.remove('active');
            navBg.classList.remove('active');
            burger.classList.remove('active');
            hero.classList.remove('active');
            accueil.classList.remove('active');
            Array.from(burger.children).forEach((child) => {
                child.style.backgroundColor = '#000000';
             });
        } else {
            return null;
        }
    })
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(this.scrollY > "10") {
        header.style.backgroundColor = '#F3F6F5';
        header.style.transition = '.3s ease-in-out';
    } else {
        header.style.backgroundColor = '#FFFFFF';
        header.style.transition = '.3s ease-in-out';
    }
})