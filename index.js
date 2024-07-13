//For the navBar changes when scrolling up
let navbarDiv = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-change');
    } else {
        navbarDiv.classList.remove('navbar-change');
    }
});

const navBarCollapse = document.getElementById("nav-collapse")
const navBarShowBtn = document.getElementById("nav-bar-open-btn")
const navBarCloseBtn = document.getElementById("nav-bar-close-btn")

// Show navBar
navBarShowBtn.addEventListener('click', () => {
    navBarCollapse.classList.add('nav-collapse-rmw')
})

// Hide navBar

navBarCloseBtn.addEventListener('click', () => {
    navBarCollapse.classList.remove('nav-collapse-rmw')
});

document.addEventListener('click', (e) => {
    if(e.target.id != "nav-collapse" && e.target.id != "nav-bar-open-btn" && e.target.parentElement.id != "nav-bar-open-btn"){
    navBarCollapse.classList.remove('navbar-collapse-rmw');
    }
});


// resize-animation-and-transition 

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-transition");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-transition");
    }, 400);
})

// play video
// let video = document.querySelector(".video-clip-wrapper video");
let video = document.getElementById("the-loop-video");
// console.log(video);
let playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", () => {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
})











