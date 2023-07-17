window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the navbar
// var navbar = document.getElementById("navbar");
//
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// Optional: Add an event listener to handle scroll events for additional effects
window.addEventListener('scroll', function() {
  // Example: Add a class to the header to change its style on scroll
  const header = document.getElementsByClassName('navbar');
  if (window.scrollY > 1) {
    header.classList.add('sticky');
  }
  else {
    header.classList.remove('sticky');
  }
});





let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tabs");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tabs");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyLiLCMXJFVSGWZzk0EgAgYq2AzquAZojYVGDbpOwHmCw0kVMiZ2ZTK7uvIkMFdmyfQMQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfuly"
      setTimeout(function(){
        msg.innerHTML = "";
      },3000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


const moveToTopBtn = document.getElementById('moveToTopBtn');

// Function to show or hide the button based on scroll position
function handleScroll() {
  if (document.documentElement.scrollTop > 300) {
    moveToTopBtn.classList.add('show');
  } else {
    moveToTopBtn.classList.remove('show');
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listener for scroll
document.addEventListener('scroll', handleScroll);
