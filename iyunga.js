```javascript
// ============================
// LEARN MORE BUTTON
// ============================

const learnMoreButton = document.querySelector("#home button");

learnMoreButton.addEventListener("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});


// ============================
// CONTACT FORM
// ============================

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    // Clear the form
    form.reset();
});


// ============================
// CURRENT YEAR
// ============================

const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    "&copy; " + year + " Iyunga School. All Rights Reserved.";


// ============================
// BACK TO TOP BUTTON
// ============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);


// Show button when scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


// Scroll to top
topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```
