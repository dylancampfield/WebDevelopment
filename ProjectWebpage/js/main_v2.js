//Select Element Function
//Just returns whatever element is passed in
const selectElement = function(element) {
  return document.querySelector(element);
};
//Variables
let menuToggler = selectElement('.menu-toggle'); //Returns menu-toggle element
let body = selectElement('body'); //Returns the body element

menuToggler.addEventListener('click', function () { //When menu-toggle is clicked, add class="open" to body
    body.classList.toggle('open'); //Works similar to className, just adds or removes class="open" on toggle
});

/*$(document).ready(function() {
  activeLink();
});

function activeLink() {
  $('.nav-list .nav-item .nav-link').click(function() {
    //remove active class
    $('.nav-link').removeClass('active');
    //add active class
    $(this).closest('.nav-link').addClass('active');
  })
}*/

//Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.anim-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.anim-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.anim-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.anim-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
