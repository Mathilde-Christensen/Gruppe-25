document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const selectedTopicInput = document.getElementById("selectedTopic");

    if (!dropdown || !dropdownBtn || !dropdownMenu || !selectedTopicInput) {
        console.error("En eller flere dropdown-elementer blev ikke fundet.");
        return;
    }

    // Åbner/lukker dropdown-menu ved klik på knappen
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop klik fra at nå document-eventlisteneren
        dropdown.classList.toggle("show");
    });

    // Vælger en kategori fra dropdown-menuen
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const selectedValue = event.target.getAttribute("data-value");
            dropdownBtn.textContent = selectedValue + " ▼"; // Opdater knaptekst
            selectedTopicInput.value = selectedValue; // Gem værdien i skjult input
            dropdown.classList.remove("show"); // Luk dropdown-menuen
        }
    });

    // Lukker dropdown, hvis der klikkes udenfor
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Luk dropdown ved tryk på "Escape"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdown.classList.remove("show");
        }
    });
});
const openPopupBtn = document.getElementById("skriv-til-os__button");
console.log(openPopupBtn, popup); // Tjekker om elementerne findes
document.addEventListener("DOMContentLoaded", function () {
    // Få fat i elementerne
    const openPopupBtn = document.getElementById("skriv-til-os__button"); // Åbn-knappen
    const closePopupBtn = document.getElementById("closePopup"); // Luk-knappen (X)
    const popup = document.getElementById("popup"); // Selve popup-vinduet

    // Åbn popup, når knappen trykkes
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Luk popup, når (X) trykkes
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Luk popup, hvis man klikker udenfor boksen
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // 🎯 **Dropdown-menu funktionalitet**
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const selectedTopicInput = document.getElementById("selectedTopic");

    // Hvis dropdown-elementerne ikke findes, stop kode
    if (!dropdown || !dropdownBtn || !dropdownMenu || !selectedTopicInput) {
        console.error("Dropdown-elementer ikke fundet.");
        return;
    }

    // Åbner/lukker dropdown-menu ved klik
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop klik fra at påvirke andre elementer
        dropdown.classList.toggle("show");
    });

    // Vælger en kategori i dropdown-menuen
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            dropdownBtn.textContent = event.target.textContent + " ▼"; // Skift tekst
            selectedTopicInput.value = event.target.getAttribute("data-value"); // Gem værdi
            dropdown.classList.remove("show"); // Luk dropdown
        }
    });

    // Luk dropdown, hvis man klikker udenfor
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Luk dropdown med "Escape"-tasten
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdown.classList.remove("show");
        }
    });
});
