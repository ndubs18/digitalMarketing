
var contactButton = document.getElementsByClassName("contact_us")[0];

var contactButtonTwo = document.getElementsByClassName("contact_us")[1];



//Events for opening the modal when clicking the contact us buttons
contactButton.addEventListener('click', function() {

    document.getElementsByClassName('contactUsModal')[0].style.display = "block";})

contactButtonTwo.addEventListener('click', function() {

    document.getElementsByClassName('contactUsModal')[0].style.display = "block";})




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
 









