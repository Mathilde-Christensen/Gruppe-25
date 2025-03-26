document.addEventListener("DOMContentLoaded", function() { //menubarens indhold added med en DOM: document.addEventListener
    const menuData = [ 
        { title: "Book flybilletter ✈️", subItems: [] }, // menubarens med under menubar gennem subItem
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
//  CONST er en forkortelse for "constant" og bruges i programmering til at 
//  deklarere en konstant variabel, hvilket betyder, at dens værdi ikke kan ændres 
//  efter den er blevet tildelt.
    const menuList = document.getElementById("menu-list"); 
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
//  Det de forskellige CONST kalder på er det på HTML'et, som henter 
//  informationen ind til sit JavaScript
//      Forlængelsen af overstående: HTML kodningen som kaldes fra JS
//  <div class="menu-indpakning">
//  <button id="menu-toggle">☰</button>
//  <nav id="menu">
//  <ul id="menu-list"></ul>
//  </nav>
//  </div>

    menuToggle.addEventListener("click", function() { //klikke funktionen, når man trykker på knappen med de tre kanpper.
        menu.classList.toggle("open"); //Åben funktionen
    });
    
    document.addEventListener("click", function(event) { //
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




