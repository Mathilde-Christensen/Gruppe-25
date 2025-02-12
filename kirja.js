const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery-track .gallery-item");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
const imagesPerSlide = 7; // Antal synlige billeder
const totalImages = images.length;

// Dynamisk beregning af bredde for at sikre korrekt scrolling
const imageWidth = images[0].getBoundingClientRect().width; 
const scrollAmount = imageWidth * imagesPerSlide; 
const maxIndex = Math.floor((totalImages - 1) / imagesPerSlide); // Undgå tom side

// Funktion til at animere scrollen i små trin
function animateScroll(targetIndex) {
    let start = index * scrollAmount;
    let end = targetIndex * scrollAmount;
    let steps = 10; // Hvor mange trin animationen tager
    let stepSize = (end - start) / steps;
    
    for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
            track.style.transform = `translateX(-${start + stepSize * i}px)`;
        }, i * 50); // Hvert trin varer 50ms
    }
    
    index = targetIndex;
}

// Funktion til at scrolle
function scrollGallery(direction) {
    let newIndex = index + direction;
    
    // Loop tilbage til første billede, hvis vi er i slutningen
    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;
    
    animateScroll(newIndex);
}

// Event listeners til pilene
nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));

// Sikrer, at billederne starter korrekt
window.addEventListener("load", () => {
    index = 0;
    track.style.transform = `translateX(0px)`;
});