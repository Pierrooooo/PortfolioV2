var firstDelay = 20
var secondDelay = 35
var thirdDelay = 45

var cursor = document.getElementById('cursor')
var cursorSonar = document.getElementById('cursor-sonar')
var cursor2 = document.getElementById('cursor2')
var cursor3 = document.getElementById('cursor3')
var cursor4 = document.getElementById('cursor4')
var goScroll = document.querySelector('.go-scroll')

var x;  // random var for mouse stop sonar thing 

document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.screenX + 'px'
    cursor.style.top = event.screenY - 100 + 'px'
    cursorSonar.style.left = event.pageX + 'px'
    cursorSonar.style.top = event.screenY - 100 + 'px'
    cursorSonar.style.display = 'none'

    setTimeout(function() {
        cursor2.style.left = event.screenX + 'px'
        cursor2.style.top = event.screenY - 100 + 'px'
    }, firstDelay);

    setTimeout(function() {
        cursor3.style.left = event.screenX + 'px'
        cursor3.style.top = event.screenY - 100 + 'px'
    }, secondDelay);

    setTimeout(function() {
        cursor4.style.left = event.screenX + 'px'
        cursor4.style.top = event.screenY - 100 + 'px'
    }, thirdDelay);

    // Mouse Stop Mooving

    if (x) clearTimeout(x);
    x = setTimeout(function(){
    cursorSonar.style.display = 'block'
    }, 200)

}, false)

// Change the cursor blend mode on hover buttons

document.querySelector('.cta').addEventListener('mouseover', e=> {
    cursor.classList.add('blend-mode-difference')
    cursor2.style.display = 'none'
    cursor3.style.display = 'none'
    cursor4.style.display = 'none'
})
document.querySelector('.cta').addEventListener('mouseout', e=> {
    cursor.classList.remove('blend-mode-difference')
    cursor2.style.display = 'block'
    cursor3.style.display = 'block'
    cursor4.style.display = 'block'
})

document.querySelector('.visit-link').addEventListener('mouseover', e=> {
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

//On click on the page 

document.addEventListener('mousedown', e=> {
    cursor.style.transform = 'translate(-50%, -50%) scale(.6)'
    cursor.style.transition = '.3s'
    cursor2.style.display = 'none'
    cursor3.style.display = 'none'
    cursor4.style.display = 'none'
})

document.addEventListener('mouseup', e=> {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'
    cursor.style.transition = 'none'
    cursor2.style.display = 'block'
    cursor3.style.display = 'block'
    cursor4.style.display = 'block'
})

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GSAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

gsap.registerPlugin(ScrollTrigger);


// loading page

const imgLoadAnim = document.querySelector('.loading img')
const loadingBar = document.querySelector('.loading-bar')
const loading = document.querySelector('.loading')

window. addEventListener ('load', e => {

    const TL = gsap.timeline ({paused : true})

    TL.
    from(imgLoadAnim, 1, {
        opacity: 0, 
        ease: "power2.out",
        delay: .4
    })
    .from(loadingBar, 1, {
        opacity: 0,
        ease: "power2.out"
    }, "-=.8")
    .from (loadingBar, 1, {
        scaleX: 0,
        scaleY: 1,

    }, "-=.9")
    .to (imgLoadAnim, 0.3, {
        opacity: 0,
        // scaleY: 0,
        delay: 1.2
    })
    .to (loadingBar, 0.3, {
        scaleY: 0,
    },"-=.3")
    .to (loading, 0.6, {
        opacity: 0,
    },"-=.1")

    TL.play()
})


// others


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

const allH2 = document.querySelectorAll('h2')

gsap.to(allH2, {
    scrollTrigger: {
    trigger: "h2",
    start: "top bottom",
    end: "+=800 top",
    scrub: 1,
    toggleActions : "play"
    },
    y: -50,
})

// gsap.to(".presentation", {
//     scrollTrigger: {
//     trigger: ".presentation",
//     start: "center center",
//     end: "center center",
//     markers: true,
//     scrub: 1,
//     toggleActions : "play"
//     },
//     opacity: 0,
//     duration: 3
// })

// gsap.to(".go-scroll", {
//     scrollTrigger: {
//     trigger: ".go-scroll",
//     start: "top 75%",
//     end: "+=500",
//     markers: true,
//     scrub: 1,
//     toggleActions : "play"
//     },
//     scale: 60,
//     duration: 3
// })
