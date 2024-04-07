// Example Use: A script that scrolls to a specific section when a button is clicked
document.getElementById('yourButtonId').addEventListener('click', function() {
    document.getElementById('yourSectionId').scrollIntoView();
});

function playGame(gamePage) {
    window.location.href = gamePage;
}

function goToHomepage() {
    window.location.href = 'bananza.html'; // Replace 'index.html' with the path to your main page
}