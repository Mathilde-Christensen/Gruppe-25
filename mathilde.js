function soeFeltIndput() { //funktionen kører, når knappen "Søg"bliver trykket
    let indputFelt = document.getElementById("indputFelt"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let lukKnap = document.getElementById("lukKnap"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let soegefeltButton = document.getElementById("soegefeltButton");

    
    if (indputFelt.style.display === "none") {
        indputFelt.style.display = "block";  // Gør søgefeltet synligt
        lukKnap.style.display = "block";  // Gør X-knappen synlig
        soegefeltButton.style.display = "none";
    } else {
        indputFelt.style.display = "none";  // Skjul feltet
        lukKnap.style.display = "none";  // Skjul knappen
        soegefeltButton.style.display = "block";
        indputFelt.value = ""; //indputfeltet bliver tomt når man lukker søgefeltet ned iegn
    }
}

let soegResultater = [
    {
        displayName: "Australien",
        link: "australien.html"
    },
    {
        displayName: "Asien",
        link: "asien.html"
    },
    {
        displayName: "Nordamerika",
        link: "nordamerika.html"
    },
    {
        displayName: "Sydamerika",
        link: "sydamerika.html"
    },
    {
        displayName: "Afrika",
        link: "afrika.html"
    },
    {
        displayName: "Europa",
        link: "europa.html"
    },
    {
        displayName: "Solorejser",
        link: "soloRejser.html"
    },
    {
        displayName: "Grupperejser",
        link: "gruppeRejse.html"
    }
];

function filterLinks() {
    let input = document.getElementById("indputFelt").value.toLowerCase();
    let liste = document.getElementById("soegeResultater");
    liste.innerHTML = ""; // Ryd tidligere resultater

    let resultater = soegResultater.filter(item => item.displayName.toLowerCase().includes(input));

    if (resultater.length === 0) {
        liste.innerHTML = "<li>Hmm... den destination er ikke på kortet – endnu!</li>"; // Hvis ingen matcher
    } else {
        resultater.forEach(item => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.displayName;
            li.appendChild(a);
            liste.appendChild(li);
        });
    }
}