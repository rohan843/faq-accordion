const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  element.querySelector(".question-link-wrapper").addEventListener("click", (e) => {
    e.preventDefault();
    element.classList.toggle("closed");
    element.classList.toggle("opened");
  });
});
