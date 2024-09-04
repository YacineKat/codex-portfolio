/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurlHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur--header') 
                       : header.classList.remove('blur--header')
}
window.addEventListener('scroll', blurlHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
                  //  ServerID     -     templateID      -    #from     -      publickey
    emailjs.sendForm('service_qict1o6', 'template_7arm422', '#contact-form', 'I6ZJ93q2Z_-7P09pS')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully! ✅'

        // Remove message after 5 seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        // Clear input fields
        contactForm.reset()
    }, ()=>{
        // Show error message
        contactMessage.textContent = 'Oops! Something went wrong... ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 50 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        document.querySelector('.nav__menu a[href*="#home"]').classList.add('active-link');
    } else {
        document.querySelector('.nav__menu a[href*="#home"]').classList.remove('active-link');
    }

    scrollActive();
});


/*=============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 400,
    reset: true
})

sr.reveal('.about__content',{origin: 'left'})
sr.reveal('.aboutimg', {origin: 'right'})
sr.reveal('.work__card', {origin: 'left', interval: 40})
sr.reveal(`.home__data, .home__img, .home__social, .home__info, .footer__container, .experience__content`)
sr.reveal(`.home__blob, skills__data, .skills__box, .services__card, .contact__card, .team__card`, {interval: 40})
sr.reveal(`.contact__form`, {interval: 40})
