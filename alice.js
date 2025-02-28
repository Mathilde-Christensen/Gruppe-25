document.addEventListener("DOMContentLoaded", function() {
    const menuData = [
        { title: "Book flybilletter ✈️", subItems: [] },
        { title: "Design din egen rejse", subItems: [] },
        { title: "Destinationer", subItems: ["Afrika", "Antarktis", "Asien", "Caribien", "Alle rejseforslag"] },
        { title: "Grupperejser med andre unge", subItems: [] },
        { title: "Rejseforslag", subItems: ["Flyruter", "Road trips", "Oplevelsesrejser", "Alle rejseforslag"] },
        { title: "Oplevelser & Aktiviteter", subItems: ["Friviligt arbejde", "Interrail", "Dykning", "Alle rejseforslag"] },
        { title: "Rejseinspiration & Planlægning", subItems: ["Rejseblog", "Rejsekalender", "Sabbatår", "Rejseberetninger", "Se flere rejseinpirationer"] },
        { title: "Vores favoritter", subItems: [] },
        { title: "Events", subItems: ["Kommende events", "KILROY Travel Festival Programmet", "Tidligere events"] },
        { title: "Om os", subItems: ["Vores eksperter", "The KILROY Way", "Rejs trygt med KILROY", "Se mere"] },
        { title: "Kontakt os", subItems: ["Nødtelefon"] },
        { title: "Rejsegavekort", subItems: [] }
    ];

    const menuList = document.getElementById("menu-list"); 
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() { 
        menu.classList.toggle("open");
    });
    
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("open");
        }
    });

    menuData.forEach(item => {
        const card = document.createElement("card");
        card.textContent = item.title;

        if (item.subItems.length > 0) {
            const arrow = document.createElement("span");
            arrow.textContent = "▼";
            arrow.classList.add("arrow");
            card.appendChild(arrow);

            const subMenu = document.createElement("ul");
            subMenu.classList.add("sub-menu");

            item.subItems.forEach(subItem => {
                const subCard = document.createElement("card");
                subCard.textContent = subItem;
                subMenu.appendChild(subCard);
            });

            card.appendChild(subMenu);

            card.addEventListener("click", function() {
                subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            });
        }

        menuList.appendChild(card);
    });
});




