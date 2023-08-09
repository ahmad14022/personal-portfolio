document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Media Kreasi Abadi",
            imgUrl: "./images/intern-1.png",
            tipe: "Game Development",
            description: `During the MBKM internship program at the Ministry of Education and Culture for the Academic Year 2022-2023, Muhammad Irawan collaborated with Mitra Media Kreasi Abad and successfully created a 2D game called "Komodo Isle."`
        },
        {
            title: "PT. Media Sarana Data",
            imgUrl: "./images/intern-2.png",
            tipe: "Website Project",
            description: `During the MBKM internship program at the Ministry of Education and Culture for the Academic Year 2022-2023, Muhammad Ircham Maulana, Yoginda Putri Bektiningsih, Muhammad Sugiharto Bagus Wijaya, Regina Noviyanti Putri, Devi Anita Sari, and Nurul Afifah collaborated with PT. Media Sarana Data (G-Media) and successfully developed a cashier web application.`
        },
        {
            title: "PT. HASHMICRO",
            imgUrl: "./images/intern-3.jpg",
            tipe: "Website Project",
            description: `Muhammad Ihza Putra Handayani successfully completed a certified internship and independent study focused on implementing ERP (Enterprise Resource Planning) software for PT. XYZ. The objective of this ERP project was to create an integrated system to streamline the company's operational business processes.`
        },
        {
            title: "PT. Qatros",
            imgUrl: "./images/intern-4.png",
            tipe: "Website Project",
            description: `During his internship at Qatros Teknologi Nusantara, Rizki Kurniawan developed a valuable AI-powered business intelligence web. This web platform streamlined data collection and analysis, featuring user-friendly visualizations and a predictive machine learning system. Rizki's work significantly improved decision-making, strategic planning, and business opportunity utilization at the company.`
        },
        {
            title: "PT Global Data Inspirasi",
            imgUrl: "./images/intern-5.png",
            tipe: "Website Project",
            description: `Annas Abdulloh is designing a telemedicine administration system using the waterfall method approach, which involves stages of communication, planning, modeling, construction, and implementation. This system aims to manage remote medical consultation processes and interactions between patients and doctors, with the goal of providing improved healthcare services and aligning with the advancements in telemedicine technology.`
        },
        {
            title: "PT Lifemedia",
            imgUrl: "./images/intern-6.png",
            tipe: "Computer Network",
            description: `Pandunanda Primadifani Kafah and Aqni Alam Aditiya's internship project, Wi-Fi Coin, combines Wi-Fi, blockchain, and cryptocurrency to offer affordable internet access, benefiting remote areas.CLEON, PT. SIMS's subsidiary, serves around 200 locations, mainly dormitories and cafes, connecting students to Wi-Fi with distributed vouchers, totaling 15,000 registered users by 2020.`
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
