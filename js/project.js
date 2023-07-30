document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Omnifood Project",
            tipe: "Non Academic Project",
            description: "I created this modification project from an online Udemy course using HTML5 and CSS3 markup languages with reusable classes. Then, I modified it by adding JavaScript programming language to create a dark-light mode feature. In addition, I added animations and used CSS variables in the CSS file. I successfully completed this project within a week timeframe.",
            url: "Check it out 👉",
            anchor: "https://omnifood-with-darklight-mode.netlify.app/",
            imgUrl: "./images/project-img1.1.png"
        },
        {
            title: "Form Inventaris Obat",
            tipe: "Non Academic Project",
            description: "This project is a CRUD project whose basic idea is from the Object Oriented Programming course using the Java language. However, in this project I changed it to HTML, CSS, Bootstrap5, and JS. I modified it by making interesting UI and interactions and the input data can be downloaded in excel form.",
            url: "Check it out 👉",
            anchor: "https://inventaris-obat.netlify.app/",
            imgUrl: "./images/project-img.1.2.png"
        },
        {
            title: "Pijar Travelling",
            tipe: "Non Academic Project",
            description: "This project is made using HTML5, CSS3, and JavaScript (Projects using ReactJS can be seen on my github). This project already uses the API to display the province and uses the flatpickr.js library to display the date on the website.",
            url: "Check it out 👉",
            anchor: "https://pijar-travelling.netlify.app/",
            imgUrl: "./images/project-img1.3.png"
        },
        {
            title: "Furniture Store",
            tipe: "Non Academic Project",
            description: "This project comes from my bootcamp on the front end. This project uses HTML5, CSS3, and JavaScript. This project displays data via API and users can interact by adding and removing items and adding items to the shopping cart. Where the items entered will be stored in local storage.",
            url: "Check it out 👉",
            anchor: "https://furniture-marketplace.netlify.app/",
            imgUrl: "./images/project-img1.5.png"
        },
        {
            title: "Pivot Table, Dashboard, etc of Sales Data",
            tipe: "Non Academic Project",
            description: "I made this project through an assignment I did from Microsoft about Data Analyst using Excel. This project taught me to make pivot tables, pivot charts, dashboards, hierarchical charts, etc. to help companies achieve their goals based on data owned by the company within a certain period of time.",
            url: "Check it out 👉",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/project-img1.6.png"
        },
        {
            title: "Fooders Mobile App",
            tipe: "Competition project",
            description: "This project is a UI/UX design that brought me to the grand finalist round (top 5). Where I finished this competition in one week. However, because this design 'jumps into solution' and only relies on UI Design without the UX Research process, so I have not been able to advance to the top 3 in the competition.",
            url: "Check it out 👉",
            anchor: "https://www.figma.com/file/eaPPPrRo2zJHJK1206F1iz/Fooders-Mobile-Application?type=design&node-id=0%3A1&t=MgVc7F9Va0hPGDkn-1",
            imgUrl: "./images/project-img4.png"
        },
        {
            title: "Patient Room Selection",
            tipe: "Academic Project",
            description: "This project comes from my big assignment in semester 1 using the C programming language. This program can input patient rooms and choose the desired room. The room will automatically not be displayed when there are patients in it and the room, etc.",
            url: "Check it out 👉",
            anchor: "https://replit.com/@AhmadMushawwir/Pemilihan-Kamar-Pasien#main.c",
            imgUrl: "./images/c.png"
        },
        {
            title: "Maze Games",
            tipe: "Academic Project",
            description: "This project comes from my big assignment in semester 2 using the C programming language. In this game the user can play and find treasure marked '*' and user marked 'X'. How to play is enough to move the direction up, right, left and down using the number that has been entered so that the user can find where the treasure is.",
            url: "Check it out 👉",
            anchor: "https://replit.com/@AhmadMushawwir/Maze-Games#main.c",
            imgUrl: "./images/c1.png"
        }
    ];

    // Function to generate project cards
    function generateProjectCards() {
        const projectContainer = document.querySelector("#first");

        projects.forEach(function (project) {
            const card = document.createElement("div");
            card.classList.add("col-md-4");

            const cardContent = `
                <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                <div class="card-content">
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
