const track = document.querySelector(" .gallery-track");
const images = document.querySelectorAll(" .gallery-track img");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let maxIndex = 0;
const imagesPerSlide = 7; 
const totalImages = images.length;

for (let i = 0; i < totalImages; i += imagesPerSlide){ //For-loop til at beregne maxIndex som er det antal gange vi skal igennem billederne for at have nået alle
    maxIndex++;
}
maxIndex--; //Trækker 1 fra, da vi starter på index 0

const imageWidth = images[0].clientWidth + 10; //Billedets bredde plus margin
const scrollAmount = imageWidth * imagesPerSlide //Hvor langt der skal scrolles

nextButton.addEventListener("click", function(){
    if(index < maxIndex){
        index++;
    } else{
        index = 0; //Så looper vi tilbage til første billederække
    }
    track.computedStyleMap.transform
}
)