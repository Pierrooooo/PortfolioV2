var cursor = document.getElementById('cursor')
var cursor2 = document.getElementById('cursor2')
var cursor3 = document.getElementById('cursor3')
var image_me = document.getElementById('image_me')
var wf1 = document.getElementById('wf1')
var wf2 = document.getElementById('wf2')
var wf3 = document.getElementById('wf3')

var firstd_elay = 1000
var second_delay = 2000


document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.pageX + 'px'
    cursor.style.top = event.pageY + 'px'
    cursor2.style.left = event.pageX + 'px'
    cursor2.style.top = event.pageY + 'px'
})
// document.addEventListener('scroll', (event) => {
//     cursor.style.top = event.pageY + window.scrollY + 'px'
// })

// PARALLAX EFFECT ON MY PHOTO 
// document.addEventListener ("mousemove" ,parallax) ;
// function parallax(event)
//     this.getElementById('image_me').ForEach(image_me => {
//     const speed = layer.getAttribute("data-speed")
//         const x = (window.innerWidth - event.pageX*speed)
//         const y= (window.innerHeight - event.pageY*speed)
        
//     image_me.style.transform = `translateX(${x}) translateY(${y})`
// })


// AJOUTER LE NUMERO DE L'ELEMENT
// var count = 0
// var project_text = document.querySelectorAll('.project_name')
// var text_content = ""

// project_text.ForEach(project_text(){
//     text_content = project_text.innerText
//     count += 1
//     blabla = document.createTextNode(count + ". " + text_content )
//     project_text.appendChild(blabla)
// })

window.onscroll = function(){   
    if (document.body.scrollTop <= 0) {
        wf1.style.transform = "translateX("+window.scrollY*-6+"px) rotate(45deg)"
        wf2.style.transform = "translate("+window.scrollY*5.5+"px, -100%) rotate(225deg)"
        wf3.style.transform = "translateX("+window.scrollY*-5+"px) rotate(45deg)"
    }
    // else if(document.body.scrollTop = 0){
    //     wf1.style.transform = "translateX(100%) rotate(45deg)"
    //     wf2.style.transform = "translate(100%, -100%) rotate(225deg)"
    //     wf3.style.transform = "translateX(100%) rotate(45deg)"
    // }
    // else{
    //     wf1.style.transform = "translateX("+window.scrollY*6+100%+"px) rotate(225deg)"
    //     wf2.style.transform = "translate("+window.scrollY*-5.5+100%+"px, -100%) rotate(45deg)"
    //     wf3.style.transform = "translateX("+window.scrollY*5+100+"px) rotate(225deg)" 
    // }
}


var burgerMenu = document.getElementById("burger_menu")
var burgerSpan1 = document.getElementById("burger_span1")
var burgerSpan2 = document.getElementById("burger_span2")
var burgerSpan3 = document.getElementById("burger_span3")

burgerMenu.addEventListener("click", function(){
    burgerSpan1.style.toggleClass('anim_burger1')
    burgerSpan2.style.display = 'none'
    burgerSpan3.style.toggleClass('anim_burger2')
})
