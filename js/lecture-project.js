document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Money Grubbing",
            tipe: "Artificial Intelligence Project",
            description: `In this game, players will control Mr. Krab who runs to collect money. The setting for the game can be on the beach or on the ocean floor. When Mr. Krabs manages to collect money, his wealth will increase. However, there is Mr. Krab's nemesis, Plankton, who stands in the way of making money. To avoid Plankton, the player must press the space bar to make Mr. Krabs jump and pass Plankton. Mr. Krab will have 5 health, and if he crashes into Plankton, it will decrease.`,
            url: "Let's play 🎮",
            anchor: "https://scratch.mit.edu/projects/715250765",
            imgUrl: "./images/tk-1.jpg"
        },
        {
            title: "Dragon Game",
            tipe: "Artificial Intelligence Project",
            description: `The rules of the game are simple, the player has to jump over the hunter by pressing the "Space Button." However, care must be taken because if the player touches the hunter, the game will end. The game challenges the player to show agility and reflexes in avoiding hunters while trying to score the highest score. By attaching the name "Komodo Game," this game may have interesting elements related to Indonesia's iconic animals, and can be an exciting entertainment for the players.`,
            url: "Let's play 🎮",
            anchor: "https://scratch.mit.edu/projects/715039231",
            imgUrl: "./images/tk-2.jpg"
        },
        {
            title: "Boat Run",
            tipe: "Artificial Intelligence Project",
            description: `In this game, the player will control a boat that continues along the river, and his task is to avoid colliding with the boulders that get in his way. The game offers fun by relying on the arrow keys on the keyboard to move the boat to the right or left to avoid obstacles. The player's score will continue to be counted throughout the game, but if a collision occurs, the game will end with the words "Game Over."`,
            url: "Let's play 🎮",
            anchor: "https://scratch.mit.edu/projects/715228435/",
            imgUrl: "./images/tk-3.jpg"
        },
        {
            title: "Jump Cat",
            tipe: "Artificial Intelligence Project",
            description: `In this game, the player must click on the green flag to start, and then control the jumping cat using the space key. The main goal of the player is to get as much score as possible by collecting items or performing precise jumps. Every time the player reaches a certain score, the background or backdrop of the game will change, providing an interesting visual variation. "Jump Cat" challenges players to display skill and precision in jumps, while providing a fun experience in developing strategies to score the highest.`,
            url: "Let's play 🎮",
            anchor: "https://scratch.mit.edu/projects/709723748/",
            imgUrl: "./images/tk-4.jpg"
        },
        {
            title: "Maze Games",
            tipe: "Basic Programming Project",
            description: "This project comes from my big assignment in semester 2 using the C programming language. In this game the user can play and find treasure marked '*' and user marked 'X'. How to play is enough to move the direction up, right, left and down using the number that has been entered so that the user can find where the treasure is.",
            url: "Let's play 🎮",
            anchor: "https://replit.com/@AhmadMushawwir/Maze-Games#main.c",
            imgUrl: "./images/c1.png"
        },
        {
            title: "Patient Room Selection",
            tipe: "Basic Programming Project",
            description: "This project comes from my big assignment in semester 1 using the C programming language. This program can input patient rooms and choose the desired room. The room will automatically not be displayed when there are patients in it and the room, etc.",
            url: "Let's play 🎮",
            anchor: "https://replit.com/@AhmadMushawwir/Pemilihan-Kamar-Pasien#main.c",
            imgUrl: "./images/c.png"
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
