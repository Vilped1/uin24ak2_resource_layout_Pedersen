// Lagde en ny const med det som skulle stå i nav. Fjernet HTML for at det ikke skulle komme to ganger pga det som står på linje 109
const categories = ["CSS", "JavaScript", "React", "Sanity and headless CMS"]

const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

// Lager en const som peker på taggen med id="categories"
const cat = document.getElementById("categories")
// Lager en const som peker på taggen med id="card"
const cards = document.getElementById("card")

// Funksjon som oppdaterer visningen av resurss kortene
function cardtitle() {
    // Gjør slik at når siden lastes inn så har HTML categorien classen "activ" slik at knapper er hvit for å indikere hvilet kort man er på
    let cat = `<li><button class="filterButton HTML active">HTML</button></li>`
    
    // Går gjennom alle objectene i arrayen
    categories.map(category => {
        // Gjør at hver karegori blir lagt til i nav menyen og ikke byttet ut med det som alt sto der
        cat += 
        // Legger inn korrekt HTML struktur for riktig visning av kategori alternativene
        `<li><button class="filterButton ${category}">${category}</button></li>`
    })
    // Sier at det som skal stå i taggen med id="categories" skal være det som står i variabelen cat
    document.getElementById("categories").innerHTML = cat


    // Lager en const som peker på taggen med class="filterButton"
    const filterbtn = document.querySelectorAll(".filterButton")

    // Gjør det som står under på hver av knappene
    filterbtn.forEach(button => {
        // Legger en knapp på den classen
        button.addEventListener("click", () => {
            // Peker på classen med array 1 som er classen nr 2
            const btn = button.classList[1]
            // Kaller på funksjonen for å endre farge på knappene
            newColor(button)
            // Sender med funksjonen filter med parameteren btn for å kun vise resurss kortet som matcher med knappen som er trykket
            filter(btn)
            console.log(button)
            console.log(btn)
        })
    })


    // Endrer farge på knappene utifra hviken knapp som trykkes
    function newColor(clickedButton) {
        // Gjør at på hver knapp så skal "active" fjernes slik at de blir mørke blå igjen
        filterbtn.forEach(button => {
            button.classList.remove("active")
        })
        // Legger til "active" utifra hvilken knatt som blir trykket på
        clickedButton.classList.add("active")
    }
}


 // Filtrerer hvilke resurss kort som vises utifra hvilken kategori kanpp som er trykket
function filter(category) {
    // Gjør slik at hvis category er "Sanity" så endre til "Sanity and headless CMS" for å matche det som står i arrayen under categories. Siden mellomrommene gjør "Sanity and headless CMS" om til fire classer
    if(category === "Sanity") {
        category = "Sanity and headless CMS"
    }

    // Lager en let med filter på "resources" om å filtrere ut resurss kortene som har card.category som er lik "category"
    let filtercards = resources.filter(card => card.category === category)
    
    // Tømmer cards for hver gang funksjonen kjøres slik at vi ikke skriver ut dobbelt opp
    let cards = ""

    // Går gjennom alle objektene i arrayen
    filtercards.map(card => {
        // Trengger ikke += her siden det er kun det enkelt objektet skal stå på hvert kort så det ville ikke blit byttet ut med noe annet siden det ikke er mer som skal stå der
        cards =
        // Legger inn korrekt HTML struktur for riktig visning av resurss kortene
        `<h1>${card.category}</h1>
        <p>${card.text}</p>
        <section>
            <ul>`
        
        // Går gjennom alle objektene i arrayen til hvert enkelt objekt som blir mappet
        card.sources.forEach(link => {
            cards += `<li><a href="${link.url}">${link.title}</a></li>`})
        
        // Sårger for at taggene er avsluttet
        cards +=
                `</ul>
            </section>`
    })
    // Sier at det som skal stå i taggen med id="card" skal være det som står i variabelen cards
    document.getElementById("card").innerHTML = cards
    console.log(category)
}


// Kaller på disse funksjonene med en gang siden laster
cardtitle()
// Parameteret sendt med gjør at man starter på HTML resurss kortet
filter("HTML")