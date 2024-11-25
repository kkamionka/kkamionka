let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Courses','Physical Fitness', 'Wellbeing', '24/7 Online Support', 'Healthy diet', 'Mentors at Toka'],
    typeSpeed: 60,
    BackSpeed: 60,
    backDelay: 1000,
    loop: true,
  });