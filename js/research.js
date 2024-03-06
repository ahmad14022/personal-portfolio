document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Kursi Pasien",
      tipe: "Website Project",
      description:
        "This product is an aid to assist in the elimination of defecation (defecation) in patients following hip fracture surgery. More specifically, this invention is equipped with an aid system to adjust the range of motion (flexion-extension) which can provide comfort in movement in the range of motion (flexion-extension). movement during the defecation elimination process so that it can prevent dislocation of post-operative hip fracture patients. In the concept process for making a flexible chair, discussions have been carried out on making this tool from the perspective of academics and health practitioners according to the fields, namely Nursing and Physiotherapy.",
      url: "Check it out 👉",
      anchor: "http://aeac.psti.unisayogya.ac.id/",
      imgUrl: "./images/rcs-3.png",
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
