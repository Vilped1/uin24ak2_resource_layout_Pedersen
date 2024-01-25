const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"]

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

const categoriesContainer = document.getElementById("categories");
const cardsContainer = document.getElementById("cardbox");

function renderCategories() {
    let categoryList = "";

    categories.forEach(category => {
        categoryList += `<li><button class="filterButton ${category}">${category}</button></li>`;
    });

    categoriesContainer.innerHTML = `<nav><ul>${categoryList}</ul></nav>`;
}

function newColor(clickedButton) {
    const filterbtn = document.querySelectorAll(".filterButton");

    filterbtn.forEach(button => {
        button.classList.remove("active");
    });

    clickedButton.classList.add("active");
}

function filter(category) {
    if (category === "Sanity") {
        category = "Sanity and headless CMS";
    }

    let filterCards = resources.filter(card => card.category === category);
    let cards = "";

    filterCards.forEach(card => {
        cards +=
            `<article>
                <h1>${card.category}</h1>
                <p>${card.text}</p>
                <section>
                    <ul>`;

        card.sources.forEach(link => {
            cards += `<li><a href="${link.url}">${link.title}</a></li>`;
        });

        cards +=
                `</ul>
            </section>
        </article>`;
    });

    cardsContainer.innerHTML = cards;
}

categoriesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filterButton")) {
        const category = event.target.classList[1];
        newColor(event.target);
        filter(category);
    }
});

renderCategories();
filter("HTML");
