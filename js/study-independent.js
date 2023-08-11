document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "PT. Lentera Bangsa Benderang",
            tipe: "Website Project",
            description: "During the independent study program, Annas Abdullah focused on Fullstack Web. The Fullstack Web graduate program focuses on building web-based applications using the PERN stack (PostgreSQL, ExpressJS, ReactJS, and NodeJS). Graduates of this program are expected to have the ability to work as Fullstack Web Developers in national and international companies.",
            anchor: ".....",
            imgUrl: "./images/si-1.png"
        },
        {
            title: "Chairos Academy",
            tipe: "Website Project",
            description: "While attending the Independent Study program at Chairos Academy, Rahadian focused more on creating a portfolio website. The website he created uses HTML, CSS, and Javascript technology. In addition, this website will be integrated with the cloud using AWS services.",
            anchor: "https://inventaris-obat.netlify.app/",
            imgUrl: "./images/si-2.png"
        },
        {
            title: "PT Dicoding Akademi Indonesia",
            tipe: "Website Project",
            description: "Muhammad Ircham Maulana or usually called Irham focuses more on Front-End Web and Back-End training. This Independent Study Training was carried out within the framework of the SIB Dicoding X Kampus Merdeka Batch 4 program. While participating in the program, Irham has made 3 projects. The three projects are: BOOKSHELF-APPS-MUHAMMAD IRRAM, CAPSTONE PROJECT SI FIX, and CatalogRestaurant-V3-Solved.",
            anchor: "https://pijar-travelling.netlify.app/",
            imgUrl: "./images/sib-3.png"
        },
        {
            title: "PT Bisa Artifisial Indonesia",
            tipe: "Cloud Computing",
            description: "PT Bisa Artificial Indonesia, an AI start-up, conducts a 5-month independent learning program, covering scheduled studies, self-learning, guest sessions, portfolio building, soft skills, and a project capstone. The capstone creates an investment app for efficient stock management, including goods recording, damage tracking, and inventory management, improving recording efficiency and reporting accuracy.",
            anchor: "https://furniture-marketplace.netlify.app/",
            imgUrl: "./images/sib-4.png"
        },
        {
            title: "PT. Talenta Sinergi Group",
            tipe: "UI/UX Design",
            description: "Nadia Julian Dewi or often called Nadia was selected in the Independent Study program implemented by Eduwork. During the lesson, Nadia focused more on UI/UX Design material. In class, Nadian learns from the basics of design and UI/UX design to being able to design a website or application that is oriented to user needs and also according to the company's needs in professional UI/UX designer work.",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/sib-5.png"
        },
        {
            title: "PT Bisa Artifisial Indonesia",
            tipe: "Data Science",
            description: "PT Bisa Artificial Indonesia is a start-up that develops services in the field of artificial intelligence. While studying at Bisa AI, Fauzan Nuraulia Darmawan chose to study Data Science material using Python. Python is a very popular programming language among data scientists. Python provides many libraries and tools that make it easy to process data, statistical analysis, and create machine learning models.",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/sib-6.jpg"
        },
        {
            title: "PT Bisa Artifisial Indonesia",
            tipe: "Machine Learning",
            description: "This project was created by Rangga Permana Putra. Implementation of the method algorithm used in the capstone project by taking the blood cancer detection from image project is a convolutional neural network (CNN) to process images and classify the blood cancer image dataset. CNN is a type of deep learning architecture that is very suitable for processing image data because it is able to extract important features from images using a convolution layer. The training results are evaluated using validation data, and predictions are made on the uploaded images after the model is trained.",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/sib-7.png"
        },
        {
            title: "PT Bisa Artifisial Indonesia",
            tipe: "UI/UX Design",
            description: "PT Bisa Artificial Indonesia is a start-up that develops services in the field of artificial intelligence. In participating in learning at PT Bisa AI, Carisna was selected to receive UI/UX material. The achievements that Carisna has gained while participating in an Independent Study at Bisa AI include building a Mobile Application UX prototype, Basic Figma: Creating a Mobile Application UI, Canva's Basic Online Graphic Design Tools, and others.",
            anchor: "https://github.com/ahmad14022/sales-data-1/blob/main/README.md",
            imgUrl: "./images/sib-8.png"
        },
        {
            title: "Bangkit Academy",
            tipe: "Machine Learning",
            description: "Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from GoTo and Traveloka. The program is designed to provide the participants with first-hand exposure to real-world practitioners and prepare them with relevant skills for a successful career in leading tech companies. In following the rise, Tazkiya was chosen to study material on Machine Learning. In the learning process, he often uses python technology.",
            imgUrl: "./images/sib-9.png"
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
