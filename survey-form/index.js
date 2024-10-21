const surveyForm = document.getElementById("surveyForm");
const result = document.getElementById("result");
const responseName = document.getElementById("responseName");
const responseEmail = document.getElementById("responseEmail");
const responseFeedback = document.getElementById("responseFeedback");
const responseRating = document.getElementById("responseRating");

surveyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const Email = document.getElementById("Email").value;
  const feedback = document.getElementById("feedback").value;
  const rating = document.getElementById("rating").value;

  responseName.textContent = `Name : ${name}`;
  responseEmail.textContent = `Email : ${Email}`;
  responseFeedback.textContent = `Feedback : ${feedback}`;
  responseRating.textContent = `Rating : ${rating}`;

  result.classList.remove("hidden");
  surveyForm.reset();
});
