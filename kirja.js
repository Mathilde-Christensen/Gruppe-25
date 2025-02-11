const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery-track img");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
const imagesPerSlide = 7; 
const totalImages = images.length;
const maxIndex = Math.floor(totalImages / imagesPerSlide);

window.onload = function(){
    const imageWidth = images[0].offsetWidth + 10; //Billedets bredde plus margin
    const scrollAmount = imageWidth * imagesPerSlide //Hvor langt der skal scrolles

    function updateScroll(){
      track.style.transform = `translateX(-${index * scrollAmount}px)`;
    }

    const buttons = [prevButton, nextButton];

    for (let i = 0; i < buttons.lenght; i++){
        buttons[i].addEventListener("click", function(){
            if(i==0) {
                index = (index > 0) ? index - 1: maxIndex;
            } else {
                index = (index < maxIndex) ? index + 1 : 0;
            }
            updateScroll();
        });
    }    
};
