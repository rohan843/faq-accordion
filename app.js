const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  element
    .querySelector(".question-link-wrapper")
    .addEventListener("click", (e) => {
      e.preventDefault();
      element.classList.toggle("closed");
      element.classList.toggle("opened");
      if (element.classList.contains("closed")) {
        element.classList.remove("opened-anim");
        element.classList.add("closed-anim");
      } else {
        element.classList.remove("closed-anim");
        element.classList.add("opened-anim");
      }
    });
});
