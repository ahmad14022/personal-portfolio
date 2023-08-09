document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "INDES Competition",
            tipe: "Academic Competition",
            description: "In this competition, students won a gold medal in the Innovation Competition at The 11th International Invention Innovation & Design Exhibition 2022 (INDES 2022). The competition, held at UITM (Universiti Teknologi Mara) in Malaysia, provides a platform for participants to showcase their inventions, innovations and designs that have the potential to be commercialized.",
            url: "Check it out 👉",
            anchor: "https://www.figma.com/file/eaPPPrRo2zJHJK1206F1iz/Fooders-Mobile-Application?type=design&node-id=0%3A1&t=MgVc7F9Va0hPGDkn-1",
            imgUrl: "./images/competition-1.png",
            creatorImgs: ["./images/creator-indes-1.png", "./images/creator-indes-2.png", "./images/creator-indes-3.png", "./images/creator-indes-4.png", "./images/creator-indes-5.png"],
            creatorName: ["Rahadian", " Nadia", " Wahyu", " Wira", " and Irfan - IT Student '20"]
        },
        {
            title: "Lomba Karya Tulis Ilmiah (LKTI)",
            tipe: "Academic Competition",
            description: "During the period from 27 September to 10 October 2022, the Scientific Writing Competition (LKTI) which was held online organized by the Muhammadiyah-Aisyiyah Higher Education Informatics Study Program Association (PTMA) achieved extraordinary achievements by winning a bronze medal in the field of Informatics.",
            url: "Check it out 👉",
            imgUrl: "./images/competition-2.png",
            creatorImgs: ["./images/creator-silat-1.png", "./images/creator-LKTI-2.png", "./images/creator-LKTI-3.png"],
            creatorName: ["Ahmad", " Ghania", " and Safira - IT Student '21"]
        },
        {
            title: "Game Programming",
            tipe: "Academic Competition",
            description: "This national level Game Programming Competition won a bronze medal. This competition is an initiative of the PTMA Informatics Study Program Association (APSI), which provides an opportunity for participants to demonstrate their ability to design and develop digital games. The team, with their dedication and creativity, creates a masterpiece in the world of game programming.",
            url: "Check it out 👉",
            imgUrl: "./images/competition-3.png",
            creatorImgs: ["./images/creator-programming-2.png", "./images/creator-silat-1.png", "./images/creator-programming-3.png", "./images/creator-programming-4.png", "./images/creator-programming-5.png"],
            creatorName: ["Pandu", " Amrullah", " Regina", " Rizka", " and Sari - IT Student '20-'22"]
        },
        {
            title: "Digital Content Competition",
            tipe: "Non Academic Competition",
            description: "The Digital Content Competition was held online by the Muhammadiyah-Aisyiyah Higher Education Informatics Study Program Association (PTMA) from 27 September to 10 October 2022 and won a bronze medal. Their success in this competition illustrates their valuable contribution in producing creative and useful digital content, representing the enthusiasm of the younger generation in developing skills and knowledge in the digital age.",
            url: "Check it out 👉",
            imgUrl: "./images/competition-4.png",
            creatorImgs: ["./images/creator-content-2.png", "./images/creator-content-1.png", "./images/creator-content-3.png"],
            creatorName: ["Lathifah", " Haydar", " and Hifzhan - IT Student '21"]
        },
        {
            title: "Poetry Competition",
            tipe: "Non Academic Competition",
            description: "On February 12, 2022, in the APSI PTMA Poetry Competition, Mahrunisa, Rahadian, and Irwanda successfully won a bronze medal. With poems full of meaning and emotion, the writers were able to eloquently and deeply express their feelings, which were ultimately recognized and appreciated by the judges.",
            url: "Check it out 👉",
            imgUrl: ["./images/competition-5.jpeg"],
            creatorImgs: ["./images/creator-puisi-1.png", "./images/creator-indes-1.png", "./images/creator-avo-2.png"],
            creatorName: "Mahrunisa, Rahadian, and Irwanda - IT Student '19-'21"
        },
        {
            title: "Poetry Competition",
            tipe: "Non Academic Competition",
            description: `During the RAKORNAS (National Coordination Meeting) APSI competition in Ternate on February 21-24, 2021, Mahrunisa Indah achieved a silver medal in the Poetry category. This accomplishment highlights her remarkable ability to convey meaning and emotions through literary works, showcasing her dedication and creativity in the art of writing poetry.`,
            url: "Check it out 👉",
            imgUrl: ["./images/competition-6.jpeg"],
            creatorImgs: ["./images/creator-puisi-1.png"],
            creatorName: "Mahrunisa Indah - IT Student '21"
        },
        {
            title: "Beasiswa P2MW",
            tipe: "Non Academic Competition",
            description: "Between February and October 2023, a group of talented individuals and their team achieved remarkable success in the P2MW Scholarship Competition. In the entrepreneurship category, they impressed the judges with innovative and solution-oriented business ideas, leading them to secure a scholarship worth Rp. 19,500,000. This achievement not only acknowledges their dedication and hard work but also serves as an inspiration for the younger generation to pursue their entrepreneurial dreams with determination and enthusiasm.",
            url: "Check it out 👉",
            imgUrl: ["./images/competition-7.jpg"],
            creatorImgs: ["./images/creator-P2MW-1.png", "./images/creator-P2MW-2.png", "./images/creator-P2MW-3.png"],
            creatorName: "Laili, Yusuf, and Wahyu - IT Student '20"
        },
        {
            title: "Kejurnas Pencak Silat",
            tipe: "Non Academic Competition",
            description: "Muhammad Amrullah has achieved a remarkable achievement by securing the title of 3rd place in the category of adult male empty-hand single art at the Magelang Championship II competition held at GOR Samaptha, Magelang. This success showcases his exceptional skills and dedication in the field of martial arts, proving his resilience in local-level competitions.",
            url: "Check it out 👉",
            imgUrl: ["./images/competition-8.jpeg"],
            creatorImgs: ["./images/creator-silat-1.png"],
            creatorName: "Muhammad Amrullah - IT Student '21"
        },
        {
            title: "Vietnam International Choir",
            tipe: "Non Academic Competition",
            description: "Irwanda Budi Pangestu and Hamdan Akbar Marzuki achieved a remarkable feat by winning the Golden Diploma in the Vietnam International Choir Competition held in Vietnam on April 3, 2023. Their success reflects the vocal quality and dedication in the field of choir, solidifying their names as outstanding representatives in the international music scene.",
            url: "Check it out 👉",
            imgUrl: ["./images/competition-9.jpg"],
            creatorImgs: ["./images/creator-avo-2.png", "./images/creator-avo-1.png"],
            creatorName: "Irwanda and Hamdan - IT Student '19 and '21"
        }
    ];

    // Function to generate project cards
    function generateProjectCards() {
        const projectContainer = document.querySelector("#first");

        projects.forEach(function (project) {
            const card = document.createElement("div");
            card.classList.add("col-md-4");

            const creatorImgs = project.creatorImgs.map(img => `<img src="${img}" alt="Customer photo" />`).join('');

            const cardContent = `
                <div class="card-card-project">
                    <div class="card-content-project">
                        <img class="card-img-top" src="${project.imgUrl}" alt="Project Image" style="width: 280px; height: 180px;">
                        <div class="card-body">
                            <span class="span-competition">${project.tipe}</span>
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="creator-container">
                                <div class="creator-imgs">${creatorImgs}</div>
                                <div class="creator-name">${project.creatorName}</div>
                            </div>
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
