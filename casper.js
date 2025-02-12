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

    // Dropdown-menu funktionalitet
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const selectedTopicInput = document.getElementById("selectedTopic");

    if (!dropdownBtn || !dropdownMenu || !selectedTopicInput) {
        console.error("En eller flere dropdown-elementer blev ikke fundet.");
        return;
    }

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop klik fra at lukke dropdown
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Luk dropdown, hvis der klikkes udenfor
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Vælg dropdown-element
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            dropdownBtn.textContent = event.target.textContent + " ▼";
            selectedTopicInput.value = event.target.getAttribute("data-value");
            dropdownMenu.style.display = "none";
        }
    });

    // Luk dropdown ved tryk på "Escape"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdownMenu.style.display = "none";
        }
    });
});
