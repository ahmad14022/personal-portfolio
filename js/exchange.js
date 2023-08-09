document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "ITB STIKOM BALI",
            imgUrl: "./images/exchange-1.png",
            description: "As part of the Merdeka Student Exchange Program (PMM2) at the Ministry of Education and Culture, Wira Nata Negara participated in a 6-month exchange program in Denpasar, hosted by the Institute of Technology and Business, STIKOM Bali. The program included the Nusantara Module (MODNUS), aimed at fostering a comprehensive understanding of diversity, inspiration, reflection, and social contribution."
        },
        {
            title: "Universitas Muhammadiyah Ponorogo",
            imgUrl: "./images/exchange-2.png",
            description: "Five students participated in a student exchange program to Muhammadiyah University Ponorogo, namely Ramadhan Miftahul Rahmad, Ikhsan Fahri Pratama, Muhamad Irfan Edowardo, Fauzan Nuraulia Darmawan, and Muhammad Ihza Putra. They took part in the exchange program for one semester. During this time, they gained many new experiences, made new friends, and experienced a fresh learning environment. This exchange became an unforgettable journey that provided them with valuable academic knowledge and social skills."
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
