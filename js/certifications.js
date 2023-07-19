document.addEventListener("DOMContentLoaded", function () {
    const certifications = [
        {
            title: "Cascading Style Sheet",
            anchor: "https://www.hackerrank.com/certificates/83117ac9f4b1",
            imgUrl: "./images/crtf-1.png"
        },
        {
            title: "Javascript Intermediate",
            anchor: "https://skilvul.com/courses/javascript-intermediate/student/ckw4ge567e2la08228wrxtl1s",
            imgUrl: "./images/crtf-2.png"
        },
        {
            title: "Fullstack Web",
            anchor: "https://drive.google.com/file/d/1LFPjRarkBWzrU_zGli9WJuqhHaE5xaeu/view",
            imgUrl: "./images/crtf-3.png"
        },
        {
            title: "HTML5 & CSS3",
            anchor: "https://www.udemy.com/certificate/UC-242ed1bc-19f5-4171-b089-f167d5f9fc75/",
            imgUrl: "./images/crtf-4.png"
        },
        {
            title: "Introduction to Data Analysis",
            anchor: "https://www.credential.net/b474c8d3-9f1b-406d-a1f8-f60938786888",
            imgUrl: "./images/crtf-5.png"
        },
        {
            title: "Data Analysis Using Excel",
            anchor: "https://www.credential.net/0c80bdc9-bb85-4c73-a9b5-a4532be9f6b2",
            imgUrl: "./images/crtf-6.png"
        },
        {
            title: "Introduction to Data Visualization",
            anchor: "https://www.credential.net/582e0b3d-ce7d-453e-9448-178cc8544b7f",
            imgUrl: "./images/crtf-7.png"
        },
        {
            title: "Analyzing and Visualizing Data Using PowerBI",
            anchor: "https://www.credential.net/a436adf7-238a-4bbf-b72f-b7982913ad10",
            imgUrl: "./images/crtf-8.png"
        }
    ];

    function generateCertificationsCards() {
        const certificationsContainer = document.querySelector("#certifications .card-container-certifications");

        certifications.forEach(function (certification) {
            const card = document.createElement("div");
            card.classList.add("card-certifications");
            card.setAttribute("data-aos", "flip-left");
            card.setAttribute("data-aos-duration", "1500");

            const cardContent = `
            <div class="card-body-crtf">
                <img class="card-img-top" src="${certification.imgUrl}" alt="Project Image" style="width: 230px; height: 150px;">
                    <a class="card-title-certification" href="${certification.anchor}" class="btn btn-primary">${certification.title}</a>
                </div>`;

            card.innerHTML = cardContent;
            certificationsContainer.appendChild(card);
        });
    }

    generateCertificationsCards();
});
