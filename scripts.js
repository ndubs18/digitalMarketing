var contactButton = document.getElementsByClassName("contact_us")[0];

var contactButtonTwo = document.getElementsByClassName("contact_us")[1];

var contactNavLink = document.getElementById("contactUsLink");

var modal = document.getElementsByClassName('contactUsModal')[0]

//Events for opening the modal when clicking the contact us buttons
contactButton.addEventListener('click', function() {

    modal.style.display = "block";})

contactButtonTwo.addEventListener('click', function() {

    modal.style.display = "block";})

contactNavLink.addEventListener('click', function() {
    modal.style.display = "block";})


//!An attempt to combine all event listeners into one! :)//

// window.addEventListener('click', (e)=> {

//     if(e.target == contactButton) {
//         modal.style.display = "block";
//     };

//     if(e.target == contactButtonTwo) {
//         modal.style.display = "block";
//     };

//     if(e.target == contactNavLink) {
//         modal.style.display = "block";
//     }   
// });



//close modal
window.addEventListener('click', (e)=> {
    var modalExit = document.getElementsByClassName("contactUsModal")[0];
    var modalExitBtn = document.getElementsByClassName("closeBtn")[0];

    if(e.target === modalExit) {

        modalExit.style.display = "none";

    }

    if(e.target === modalExitBtn){
        modalExit.style.display = "none";
    }

})




window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbaR")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 









