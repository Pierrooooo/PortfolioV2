
// var before = window.getComputedStyle(document.querySelector('h1'), ":before").getPropertyValue('color')
// console.log(before)
// console.log(document.querySelector('h1:before'))


const firstDelay = 20
const secondDelay = 35
const thirdDelay = 45
const ProjectReviewDelay = 3000

const cursor = document.getElementById('cursor')
const cursorSonar = document.getElementById('cursor-sonar')
const cursor2 = document.getElementById('cursor2')
const cursor3 = document.getElementById('cursor3')
const cursor4 = document.getElementById('cursor4')
const closeCursor = document.getElementById('close-cursor')
const closeCursor2 = document.getElementById('close-cursor2')
const goScroll = document.querySelector('.go-scroll')

var x;  // random var for mouse stop sonar thing 

document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px'
    cursor.style.top = event.clientY + 'px'
    cursorSonar.style.left = event.clientX + 'px'
    cursorSonar.style.top = event.clientY + 'px'
    cursorSonar.style.display = 'none'

    setTimeout(function() {
    cursor2.style.left = event.clientX + 'px'
    cursor2.style.top = event.clientY + 'px'
    }, firstDelay);

    setTimeout(function() {
    cursor3.style.left = event.clientX + 'px'
    cursor3.style.top = event.clientY + 'px'
    }, secondDelay);

    setTimeout(function() {
    cursor4.style.left = event.clientX + 'px'
    cursor4.style.top = event.clientY + 'px'
    }, thirdDelay);

    setTimeout(function() {
        closeCursor.style.left = event.pageX + 'px'
        closeCursor.style.top = event.screenY + 'px'
        closeCursor.style.transform = 'rotate' + event.screenY / 100 * 3.6 + 'deg'
        closeCursor2.style.left = event.pageX + 'px'
        closeCursor2.style.top = event.screenY + 'px'
    }, secondDelay);

    // Mouse Stop Mooving  Sonar Thing

    if (x) clearTimeout(x);
    x = setTimeout(function(){
    cursorSonar.style.display = 'block'
    }, 200)

}, false)

// Change the cursor blend mode on hover buttons
const hoverCursor = document.querySelectorAll('.hover-cursor')
hoverCursor.forEach(el => {
    
    el.addEventListener('mouseover', () => {
        cursor.classList.add('blend-mode-difference')
        cursor2.style.display = 'none'
        cursor3.style.display = 'none'
        cursor4.style.display = 'none'
    })

    el.addEventListener('mouseout', () => {
        cursor.classList.remove('blend-mode-difference')
        cursor2.style.display = 'block'
        cursor3.style.display = 'block'
        cursor4.style.display = 'block'
    })
    
})

document.querySelector('.visit-link').addEventListener('mouseover', () => {
    cursor.classList.add('blend-mode-difference')
    cursor2.style.display = 'none'
    cursor3.style.display = 'none'
    cursor4.style.display = 'none'
})
document.querySelector('.visit-link').addEventListener('mouseout', e=> {
    cursor.classList.remove('blend-mode-difference')
    cursor2.style.display = 'block'
    cursor3.style.display = 'block'
    cursor4.style.display = 'block'
})

//Change the cursor size on click on the page 

document.addEventListener('mousedown', e=> {
    cursor.style.transform = 'translate(-50%, -50%) scale(.4)'
    cursorSonar.style.transform = 'scale(.4)'
    cursor.style.transition = '.3s'
    cursor2.style.display = 'none'
    cursor3.style.display = 'none'
    cursor4.style.display = 'none'
    closeCursor.style.transform = 'scale(.4) translate(-50%, -50%) rotate(45deg) '
    closeCursor2.style.transform = 'scale(.4) translate(-50%, -50%) rotate(135deg) '
})

document.addEventListener('mouseup', e=> {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'
    cursorSonar.style.transform = 'scale(1)'
    cursor.style.transition = 'none'
    cursor2.style.display = 'block'
    cursor3.style.display = 'block'
    cursor4.style.display = 'block'
    closeCursor.style.transform = 'scale(1) translate(-50%, -50%) rotate(45deg) '
    closeCursor2.style.transform = 'scale(1) translate(-50%, -50%) rotate(135deg) '
})

// Suposed to stop the element that shos the user to scroll when the page is scrolled 

document.addEventListener('scroll', e=> {

    if(window.scrollY > 98 ){
        goScroll.firstChild.style.animation.animationPlayState = 'paused'
    }
    else if (window.scrollY < 98 ){
        goScroll.firstChild.style.animation.animationPlayState = 'running'
    }

})

// Footer change cursor color 

document.querySelector('footer').addEventListener('mouseover' , e =>{
    cursor.style.backgroundColor = '#FDF6F8'
    cursorSonar.style.backgroundColor = '#FDF6F8'
    cursor2.style.backgroundColor = '#FDF6F8'
    cursor3.style.backgroundColor = '#FDF6F8'
    cursor4.style.backgroundColor = '#FDF6F8'
})

document.querySelector('footer').addEventListener('mouseout' , e =>{
    cursor.style.backgroundColor = '#110f0e'
    cursorSonar.style.backgroundColor = '#110f0e'
    cursor2.style.backgroundColor = '#110f0e'
    cursor3.style.backgroundColor = '#110f0e'
    cursor4.style.backgroundColor = '#110f0e'
})


// Clear the URL but it doesn't work

const onlyUrl = window.location.href.replace(window.location.search, "")


// Project review pop up

const viewProjectButtons = document.querySelectorAll('.view-project')
const projectReview = document.querySelector('.project-review')

viewProjectButtons.forEach( el => {
    
    el.addEventListener('click', () => {


        projectReview.innerHTML=``
        projectReview.innerHTML=`
            <div class="project-review-content">
                <h4>`+ el.dataset.title +`</h4>
                <div class="stack">
                    <p>`+ el.dataset.stack +`</p>
                </div>
                <p class="project-intro">`+ el.dataset.intro +`<br>
                <p class="project-text">`+ el.dataset.text +`</p>
                <img class="logo" src="imgs/icons/Logo_8pierrecaillet.svg">
                <div class="close-project-review">
                    <span></span>
                    <span></span>
                </div>
            </div>
        `
        projectReview.style.transform = 'translate(0)'
        
        projectReview.addEventListener('click', e =>{
            projectReview.style.transform = 'translate(100%)'
        })
    })
})

projectReview.addEventListener('mouseover', e =>{
    cursor.style.display = 'none'
    cursor2.style.display = 'none'
    cursor3.style.display = 'none'
    cursor4.style.display = 'none'
    cursorSonar.style.display = 'none'
    closeCursor.style.display = 'block'
    closeCursor2.style.display = 'block'
})
projectReview.addEventListener('mouseout', e =>{
    cursor.style.display = 'block'
    cursor2.style.display = 'block'
    cursor3.style.display = 'block'
    cursor4.style.display = 'block'
    cursorSonar.style.display = 'block'
    closeCursor.style.display = 'none'
    closeCursor2.style.display = 'none'
})

const sliderText = document.querySelector('footer .bottom .banner')
const sliderTexts = document.querySelectorAll('footer .bottom .banner span')
const sliderTextsArray = Array.from(sliderTexts)

sliderText.addEventListener('mouseover', e =>{
    sliderTextsArray.forEach(e =>{
        e.style.animationPlayState = 'paused'
    })
})
sliderText.addEventListener('mouseout', e =>{
    sliderTextsArray.forEach(e =>{
        e.style.animationPlayState = 'running'
    })
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GSAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

gsap.registerPlugin(ScrollTrigger);


// loading page

const imgLoadAnim = document.querySelector('.loading img')
const loadingBar = document.querySelector('.loading-bar')

const loadingImgBar = []
loadingImgBar[0] = imgLoadAnim
loadingImgBar[1] = loadingBar

window.addEventListener ('load', e => {

    const TL = gsap.timeline({paused : true})

    TL
    .from (loadingBar, 1, {
        scaleX: 0,
        scaleY: 1,
    })
    .to (imgLoadAnim, 0.3, {
        opacity: 0
    })
    .staggerTo(loadingImgBar, .5, {
        opacity: 0, 
        ease:"power4.out"
    })
    .to ('.loading', 0.6, {
        opacity: 0,
    },"-=.1")
    .to(".main-container", {
        overflow: "visible"
    })

    TL.play()
})


// Presentation Desappears

const presentation = document.querySelector('#presentation')
gsap.to(presentation, {
    scrollTrigger: {
    trigger: presentation,
    start: "bottom center",
    end: "bottom +=300",
    scrub: true,
    },
    opacity: 0,
})

// Projects Appears

const firstProject = [document.querySelector(".project1 .project-counter"),document.querySelector(".project1 h4"),document.querySelector(".project1 .project-desc"),document.querySelector(".project1 .click")]
gsap.to(firstProject, {
    scrollTrigger: {
    trigger: ".project-desc1",
    start: "top bottom",
    end: "bottom",
    toggleActions : "play pause resume reset",
    },
    opacity: 1,
    y: -32,
    duration: .5,
    stagger: .2,
    ease: "power3.out",
})

const secondProject = [document.querySelector(".project2 .project-counter"),document.querySelector(".project2 h4"),document.querySelector(".project2 .project-desc"),document.querySelector(".project2 .click")]
gsap.to(secondProject, {
    scrollTrigger: {
    trigger: ".project-desc2",
    start: "top bottom",
    end: "bottom",
    toggleActions : "play pause resume reset"
    },
    opacity: 1,
    y: -32,
    duration: .5,
    stagger: .2,
    ease: "power3.out",
})

const thirdProject = [document.querySelector(".project3 .project-counter"),document.querySelector(".project3 h4"),document.querySelector(".project3 .project-desc"),document.querySelector(".project3 .click")]
gsap.to(thirdProject, {
    scrollTrigger: {
    trigger: ".project-desc3",
    start: "top bottom",
    end: "bottom",
    toggleActions : "play pause resume reset"
    },
    opacity: 1,
    y: -32,
    duration: .5,
    stagger: .2,
    ease: "power3.out",
})

// Section Titles like Projects or About

const allH2 = document.querySelectorAll('h2')
allH2.forEach(el => {

    gsap.to(el, {
        scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "+=800 top",
        scrub: 1,
        toggleActions : "play"
        },
        y: -50,
    })
})

// About Section

const allBigTexts = document.querySelectorAll('.big-text')
const allText = document.querySelectorAll('.text')
const allTextBottom = document.querySelectorAll('.text-bottom')


allBigTexts.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "+=400 top",
        scrub: 1,
        toggleActions : "play"
        },
        x: 90,
    })
})

allText.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "+=400 top",
        scrub: 1,
        toggleActions : "play"
        },
        y: -40,
    })
})

allTextBottom.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "+=400 top",
        scrub: 1,
        toggleActions : "play"
        },
        y: -60,
    })
})

// Footer Appears

const footerSection = document.querySelectorAll('.all-footer')

gsap.to(footerSection, {
    scrollTrigger: {
    trigger: footerSection,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    toggleActions : "play"
    },
    opacity: 1,
    y: -50
})
