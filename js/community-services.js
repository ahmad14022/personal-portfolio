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
            description: "The Healthy Citizen Information System (SIWARAS) is an information system designed to manage and store data on patients who come for health checks. This system allows health workers to record patient information and view monthly patient summary data.",
            url: "Check it out 👉",
            anchor: "https://siwaras.psti.unisayogya.ac.id/",
            imgUrl: "./images/rcs-2.png"
        },
        {
            title: "LAZIZMU",
            tipe: "Website Project",
            description: "The Zakat, Infaq and Alms (ZIS) Administration and Reporting information system using the Laravel Framework is an information system developed specifically for Lazismu Banguntapan Selatan. This system aims to automate the administration and reporting processes related to Zis management, making it easier to record, monitor and report donation activities and the use of ZIS funds in a transparent and efficient manner.",
            url: "Check it out 👉",
            anchor: "https://lazizmu.psti.unisayogya.ac.id/",
            imgUrl: "./images/rcs-4.png"
        },
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
