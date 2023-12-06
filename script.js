

let menu = document.querySelector("#menu");
let main = document.querySelector(".main");
let menuBar = document.querySelector('.menubar');

// Set initial state
menuBar.style.visibility = 'hidden';
menuBar.style.transform = 'translateX(100%)'; // Start off-screen

menuBar.querySelector('#closemenu').addEventListener('click', function () {
    // Use GSAP to animate the menu out
    gsap.to(menuBar, { duration: 0.3, x: '100%', ease: 'power2.inOut', onComplete: hideMenu });
});

menu.addEventListener('click', function(){
    // Use GSAP to animate the menu in
    gsap.to(menuBar, { duration: 0.3, x: '0%', ease: 'power2.inOut' });
    menuBar.style.visibility = 'visible';
});

// Function to hide the menu after the animation
function hideMenu() {
    menuBar.style.visibility = 'hidden';
}
