let menu = document.getElementById('menu')
let showList = document.querySelector('.list')

menu.addEventListener('click', function () {

    const iconElem = menu.querySelector('i')

    // it checks for current class present bx-menu or not
    if (iconElem.classList.contains('bx-menu')) {

        iconElem.classList.remove('bx-menu')
        iconElem.classList.add('bxl-xing')
        // it remove hidden property which hides list
        showList.classList.remove('hidden')

    }
    else {

        iconElem.classList.remove('bxl-xing')
        iconElem.classList.add('bx-menu')
        showList.classList.add('hidden')

    }
})

// let's talk 
const talkBtn = document.getElementById('talk-btn')
const myNumber = document.querySelector('.number')
talkBtn.addEventListener('click', function () {

    if (myNumber.classList.contains('hidden')) {
        myNumber.classList.remove('hidden')
        talkBtn.innerHTML = `<p>Hide Number</p>`
    } else {
        myNumber.classList.add('hidden')
        talkBtn.innerHTML = `<p>Let's Talk</p>`
    }
})

// back to top
const homePage = document.getElementById('home-page')
const backToTop = document.getElementById('home-button')

backToTop.addEventListener('click', function () {
    homePage.scrollIntoView()
})

// about section
const aboutBtn = document.getElementById('about-btn')
const aboutBtnS = document.getElementById('about-btnS')
const aboutSection = document.getElementById('about-section')

aboutBtn.addEventListener('click', function () {
    aboutSection.scrollIntoView()
})

aboutBtnS.addEventListener('click', function () {
    aboutSection.scrollIntoView()
})

// education section
const educationBtn = document.getElementById('education-btn')
const educationBtnS = document.getElementById('education-btnS')
const educationSection = document.getElementById('education-section')

educationBtn.addEventListener('click', function () {
    educationSection.scrollIntoView()
})

educationBtnS.addEventListener('click', function () {
    educationSection.scrollIntoView()
})

// skills section
const skillsBtn = document.getElementById('skills-btn')
const skillsBtnS = document.getElementById('skills-btnS')
const skillsSection = document.getElementById('skills-section')

skillsBtn.addEventListener('click', function () {
    skillsSection.scrollIntoView()
})

skillsBtnS.addEventListener('click', function () {
    skillsSection.scrollIntoView()
})

// contact section
const contactBtn = document.getElementById('contact-btn')
const contactBtnS = document.getElementById('contact-btnS')
const contactSection = document.getElementById('contact-section')

contactBtn.addEventListener('click', function () {
    contactSection.scrollIntoView()
})

contactBtnS.addEventListener('click', function () {
    contactSection.scrollIntoView()
})