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
document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    // Åbn popup
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Luk popup
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Luk popup, hvis man klikker udenfor formularen
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

