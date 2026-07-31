// Welcome message
window.onload = function () {
    console.log("Welcome to my Portfolio!");
};

// About Me button
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", function () {
        window.location.href = "about.html";
    });
}

// Hover effect for cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});