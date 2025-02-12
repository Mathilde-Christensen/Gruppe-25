const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery-track .gallery-item");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
const imagesPerSlide = 7; // Antal synlige billeder
const totalImages = images.length;
const imageWidth = images[0].clientWidth + 20; // Billedets bredde + margin
const scrollAmount = imageWidth * imagesPerSlide;
const maxIndex = Math.ceil(totalImages / imagesPerSlide) - 1;


function updateScroll() {
    track.style.transform = `translateX(-${index * scrollAmount}px)`;
}

// Loop igennem billederne med pile-knapper
function scrollGallery(direction) {
    for (let i = 0; i < imagesPerSlide; i++) {
        index += direction;
        if (index < 0) index = maxIndex;
        if (index > maxIndex) index = 0;
    }
    updateScroll();
}

nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));