const quizData = [
  {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      correct: "c",
  },
  {
      question: "Who is the CEO of Tesla?",
      a: "Bill Gates",
      b: "Elon Musk",
      c: "Steve Jobs",
      d: "Jeff Bezos",
      correct: "b",
  },
  {
      question: "What is the largest planet in our solar system?",
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      correct: "c",
  },
  {
      question: "What year did the Titanic sink?",
      a: "1905",
      b: "1912",
      c: "1920",
      d: "1930",
      correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="location.reload()" class="btn btn-custom mt-4"><i class="fas fa-redo-alt"></i> Reload</button>
          `;
      }
  }
});