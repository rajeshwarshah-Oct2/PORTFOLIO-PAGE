
const profileButton = document.getElementById("profileButton");
const backButton = document.getElementById("backButton");

const home = document.getElementById("home");
const profilePage = document.getElementById("profilePage");


// Open profile
profileButton.addEventListener("click", function () {

    home.style.display = "none";

    profilePage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Go back to home
backButton.addEventListener("click", function () {

    profilePage.style.display = "none";

    home.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
