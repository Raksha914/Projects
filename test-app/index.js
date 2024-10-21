const quizData = [
  {
    question: "What is the capital of France",
    options: ["paris", "london", "berlin", "madrid"],
    correct: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["earth", "mars", "jupiter", "venus"],
    correct: 2,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["charles", "william", "jane", "mark"],
    correct: 1,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "12", "8"],
    correct: 3,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option");
const submit = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEls.forEach((optionsEls, index) => {
    // console.log(currentQuestion.options[index]);
    // console.log(index);

    document.getElementById("option" + index).textContent =
      currentQuestion.options[index];

    optionsEls.checked = false;
  });
}

function checkAnswer() {
  let selectOption = document.querySelector('input[name="option"]:checked');

  if (!selectOption) {
    alert("Please select an option");
    return;
  }
  let answer = selectOption.value;
  if (answer == quizData[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultEl.classList.remove("result-hidden");
  scoreEl.textContent = score;
  totalEl.textContent = quizData.length;
  document.getElementById("quiz").classList.add("result-hidden");
}

submit.addEventListener("click", checkAnswer);

loadQuestion();
