//Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() { //Make sure DOM content loads beforehand
    //When the homeButton is clicked,
    document.getElementById('homeButton').addEventListener('click', function() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    });

    //When the about button is clicked anywhere on the screen
    document.getElementById('aboutButton').addEventListener('click', function() {
        var aboutSection = document.getElementById('about'); //Grab where the About section is
        var aboutTop = aboutSection.getBoundingClientRect().top + window.pageYOffset; //Grabs where it starts compared to where we are
        var navbarHeight = document.querySelector('.topbarContainer').offsetHeight; //Calculate height of nav bar
        var finalScrollPosition = aboutTop - navbarHeight; //Position to scroll to so that About Us is below the nav bar
        window.scrollTo({
            top: finalScrollPosition,
            behavior: 'smooth'
        });
    });
});

//Sends user to a new page w/ the specific game that the user clicks
function playGame(gamePage) {
    window.location.href = gamePage;
}
//Allows the user to go back to the BANANZA home page
function goToHomepage() {
    window.location.href = 'bananza.html'; // Replace 'index.html' with the path to your main page
}