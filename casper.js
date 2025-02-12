document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Elementer til popup-funktionalitet
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    if (openPopupBtn && closePopupBtn && popup) {
        // Åbn popup når "Skriv til os" klikkes
        openPopupBtn.addEventListener("click", function () {
            popup.style.display = "flex"; // Gør popup synlig
        });

        // Luk popup når 'X' klikkes
        closePopupBtn.addEventListener("click", function () {
            popup.style.display = "none"; // Skjul popup
        });

        // Luk popup hvis der klikkes udenfor boksen
        window.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    } else {
        console.error("Popup-elementer blev ikke fundet!");
    }

    // 🔹 Dropdown-menu funktionalitet
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const selectedTopicInput = document.getElementById("selectedTopic");

    if (dropdown && dropdownBtn && dropdownMenu && selectedTopicInput) {
        // Åbn/luk dropdown-menu
        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Stop klik fra at lukke dropdown
            dropdown.classList.toggle("show");
        });

        // Vælg en kategori fra dropdown
        dropdownMenu.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                const selectedValue = event.target.getAttribute("data-value");
                dropdownBtn.textContent = selectedValue + " ▼"; // Opdater knaptekst
                selectedTopicInput.value = selectedValue; // Gem valgte værdi
                dropdown.classList.remove("show"); // Luk dropdown
            }
        });

        // Luk dropdown hvis der klikkes udenfor
        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });

        // Luk dropdown ved tryk på Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                dropdown.classList.remove("show");
            }
        });
    } else {
        console.error("Dropdown-elementer blev ikke fundet!");
    }
});
