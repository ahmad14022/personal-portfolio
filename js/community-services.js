document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Salaghurt",
            tipe: "Website Project",
            description: "This project helps MSMEs in marketing and introducing products developed by the community, namely Yoghurt made from Salak fruit. This website is an output of the PkM for Increasing the Productivity of the Agrotourism Area in Bangunkerto Village, Sleman Regency, Yogyakarta Based on Local Wisdom through the Diversification of Processed Salak Products",
            url: "Check it out 👉",
            anchor: "https://salaghurt.psti.unisayogya.ac.id/",
            imgUrl: "./images/rcs-1.png"
        },
        {
            title: "SIWARAS",
            tipe: "Website Project",
            description: "",
            url: "Check it out 👉",
            anchor: "https://siwaras.psti.unisayogya.ac.id/",
            imgUrl: "./images/rcs-2.png"
        },
        {
            title: "LAZISMU",
            tipe: "Website Project",
            description: "....",
            url: "Check it out 👉",
            anchor: "https://pijar-travelling.netlify.app/",
            imgUrl: "./images/project-img1.3.png"
        },
        {
            title: "Satu lagi",
            tipe: "Website Project",
            description: "",
            url: "Check it out 👉",
            anchor: "http://aeac.psti.unisayogya.ac.id",
            imgUrl: "./images/project-img1.5.png"
        },
        {
            title: "Pivot Table, Dashboard, etc of Sales Data",
            tipe: "Data Analysis Project",
            description: "Student made this project through an assignment student did from Microsoft about Data Analyst using Excel. This project taught student to make pivot tables, pivot charts, dashboards, hierarchical charts, etc. to help companies achieve their goals based on data owned by the company within a certain period of time.",
            url: "Check it out 👉",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/project-img1.6.png"
        }
    ];

    // Function to generate project cards
    function generateProjectCards() {
        const projectContainer = document.querySelector("#first");

        projects.forEach(function (project) {
            const card = document.createElement("div");
            card.classList.add("col-md-4");

            const cardContent = `
                <div class="card-card-project">
                    <div class="card-content-project">
                        <img class="card-img-top" src="${project.imgUrl}" alt="Project Image" style="width: 300px; height: 200px;">
                        <div class="card-body">
                            <span class="span-project">${project.tipe}</span>
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a class="button-project" href="${project.anchor}" class="btn btn-primary">${project.url}</a>
                        </div>
                    </div>
                </div>
            `;
            card.innerHTML = cardContent;
            projectContainer.appendChild(card);
        });
    }
    generateProjectCards();
});
