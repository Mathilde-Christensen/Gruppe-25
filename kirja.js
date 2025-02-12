const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery-track img");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
const imagesPerSlide = 7; //Antal synlige billede ad gangen
const totalImages = images.length;
const maxIndex = Math.ceil(totalImages / imagesPerSlide)-1;

function updateScroll(){
    track.style.transform = `translateX(-${index * scrollAmount}px)`;
}
const imageWidth = images[0].offsetWidth + 10; //Billedets bredde plus margin
const scrollAmount = imageWidth * imagesPerSlide //Hvor langt der skal scrolles
function updateScroll(){
  track.style.transform = `translateX(-${index * scrollAmount}px)`;
}
prevButton.addEventListener("click", function(){
    if (index > 0){
        index--;
    }else {
        index = maxIndex;
    }
    updateScroll();
});

nextButton.addEventListener("click", function(){
    if (index < maxIndex){
        index++;
    } else {
        index = 0;
    }
    updateScroll();
});
