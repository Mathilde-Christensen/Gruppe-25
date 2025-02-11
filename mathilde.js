function soeFeltIndput() { //funktionen kører, når knappen "Søg"bliver trykket
    let indputFelt = document.getElementById("indputFelt"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let lukKnap = document.getElementById("lukKnap"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let soegefeltButton = document.getElementById("soegefeltButton");
    let liste = document.getElementById("soegeResultater"); // Henter søgeresultat-listen


    if (indputFelt.style.display === "none") {
        indputFelt.style.display = "block";  // Gør søgefeltet synligt
        lukKnap.style.display = "block";  // Gør X-knappen synlig
        soegefeltButton.style.display = "none";
    } else {
        indputFelt.style.display = "none";  // Skjul feltet
        lukKnap.style.display = "none";  // Skjul knappen
        soegefeltButton.style.display = "block";
        indputFelt.value = ""; //indputfeltet bliver tomt når man lukker søgefeltet ned iegn
        liste.innerHTML = "";  //fjerner søgeresultaterne
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


function filterLinks() { //Funktionen starter når man skriver i inputfeltet ( onkeyup="filterLinks()"i HTML)
    let input = document.getElementById("indputFelt").value.toLowerCase(); // laver en var af værdien fra indputtet som kommer i feltet samt laver det til små bugstaver
    let liste = document.getElementById("soegeResultater"); // laver en var ud af soegeResultater ul i html
    liste.innerHTML = ""; // rydder liste til næste gang der skal skrves i søgefelt

    let resultater = []; // laver en var af en kom liste som senere kommer flere elementer i

    for (let i = 0; i < soegResultater.length; i++) { // for loopet tjekker arrayen af soegResultater om der er match med det der står i indput feltet og soegResultater
        if (soegResultater[i].displayName.toLowerCase().includes(input)) { //tjekker om søgeordet findes didisplayName
            resultater.push(soegResultater[i]); //gemmer match i resultater 
        }
    }

    if (resultater.length === 0) { // hvis der ikke findes et nogen elementer i resultater listen skrives der en besked på siden
        liste.innerHTML = "<li>Ingen resultater fundet</li>";
    } else {
        for (let i = 0; i < resultater.length; i++) { // for loopet tjekker resultater listen igennem som er lavet efter soegResultater match
            let li = document.createElement("li"); // laver det til et li element 
            let a = document.createElement("a"); // laver det til et a links så man kan trykke på linket
            a.href = resultater[i].link; // tilføjer det rette link til resulatet
            a.textContent = resultater[i].displayName; //tilføjer link teksten til sidne
            li.appendChild(a); //tiltøjer a til dom
            liste.appendChild(li); //tilføjer li til ul'en i dom'en
        }
    }
}