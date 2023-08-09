document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Omnifood Project",
            tipe: "Website Project",
            description: "I created this modification project from an online Udemy course using HTML5 and CSS3 markup languages with reusable classes. Then, I modified it by adding JavaScript programming language to create a dark-light mode feature. In addition, I added animations and used CSS variables in the CSS file. I successfully completed this project within a week timeframe.",
            url: "Check it out 👉",
            anchor: "https://omnifood-with-darklight-mode.netlify.app/",
            imgUrl: "./images/project-img1.1.png"
        },
        {
            title: "Form Inventaris Obat",
            tipe: "Website Project",
            description: "This project is a CRUD project whose basic idea is from the Object Oriented Programming course using the Java language. However, in this project I changed it to HTML, CSS, Bootstrap5, and JS. I modified it by making interesting UI and interactions and the input data can be downloaded in excel form.",
            url: "Check it out 👉",
            anchor: "https://inventaris-obat.netlify.app/",
            imgUrl: "./images/project-img.1.2.png"
        },
        {
            title: "Pijar Travelling",
            tipe: "Website Project",
            description: "This project is made using HTML5, CSS3, and JavaScript (Projects using ReactJS can be seen on my github). This project already uses the API to display the province and uses the flatpickr.js library to display the date on the website.",
            url: "Check it out 👉",
            anchor: "https://pijar-travelling.netlify.app/",
            imgUrl: "./images/project-img1.3.png"
        },
        {
            title: "Furniture Store",
            tipe: "Website Project",
            description: "This project comes from my bootcamp on the front end. This project uses HTML5, CSS3, and JavaScript. This project displays data via API and users can interact by adding and removing items and adding items to the shopping cart. Where the items entered will be stored in local storage.",
            url: "Check it out 👉",
            anchor: "https://furniture-marketplace.netlify.app/",
            imgUrl: "./images/project-img1.5.png"
        },
        {
            title: "Pivot Table, Dashboard, etc of Sales Data",
            tipe: "Data Analysis Project",
            description: "I made this project through an assignment I did from Microsoft about Data Analyst using Excel. This project taught me to make pivot tables, pivot charts, dashboards, hierarchical charts, etc. to help companies achieve their goals based on data owned by the company within a certain period of time.",
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
