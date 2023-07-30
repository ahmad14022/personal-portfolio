document.addEventListener("DOMContentLoaded", function () {
  const toRotate = ["IT Study Program", "UNISA Jogja"];
  const period = 2000;
  let text = "";
  let loopNum = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let cursorSpeed = 500;

  function type() {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (isDeleting) {
      text = fullText.substring(0, text.length - 1);
      typingSpeed = deletingSpeed;
    } else {
      text = fullText.substring(0, text.length + 1);
      typingSpeed = 100;
    }

    const textElement = document.querySelector(".txt-rotate");
    textElement.textContent = text;

    if (!isDeleting && text === fullText) {
      isDeleting = true;
      typingSpeed = cursorSpeed;
    } else if (isDeleting && text === "") {
      isDeleting = false;
      loopNum++;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, typingSpeed);
});

// function downloadCV() {
//   var link = document.createElement('a');
//   link.href = 'https://drive.google.com/file/d/1shYjU4IJONx8dFU4PbKndOc88Hgq3pTz/view?usp=sharing';
//   link.download = 'CV_AHMADMUSHAWWIR.pdf';
//   link.click();
// }

