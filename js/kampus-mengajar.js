document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "SMK Ar Rahmah",
            imgUrl: "./images/km-1.png",
            description: `During this program, student actively engaged in both teaching various subjects and spearheading a project aimed at enhancing the school's modernization. This project involved the creation of a school website, allowing the public to easily visit and explore the facilities offered by SMK Ar Rahmah. This initiative not only underscores their dedication to education but also showcases their efforts in contributing to the school's advancement and accessibility.`
        },
        {
            title: "SMA Muhammadiyah Gombong",
            imgUrl: "./images/km-2.png",
            description: `Students roles in this program as educators seamlessly intertwined with their creation of the "Admissions Website" project. This digital platform not only streamlined promotional efforts and enrollment procedures but also provided an immersive showcase of the school's facilities. Their combined commitment to teaching and technological innovation exemplified a harmonious blend of education and modernization, ultimately enhancing the school's accessibility and prospective students' experience`
        },
        {
            title: "SDN Nogosaren Sleman",
            imgUrl: "./images/km-3.png",
            description: `In this program, Regina serves diligently by imparting knowledge to the students. With an inspiring spirit, Regina is dedicated to providing quality education to the students at the school. Through her interactions and persistent efforts, Regina has managed to build a positive learning environment and assist the students in comprehending various subjects. Regina's success in dedicating herself to the teaching and learning process at SDN 2 Nogosaren serves as a role model for the younger generation, highlighting the importance of active participation in the field of education to create a brighter future.`
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
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
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
