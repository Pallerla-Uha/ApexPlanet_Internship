const questions = [
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What part of the cell contains genetic material?",
    options: ["Nucleus", "Cytoplasm", "Membrane"],
    answer: "Nucleus"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    optionsEl.appendChild(btn);
  });
}

function showResult() {
  questionEl.textContent = "Quiz Complete!";
  optionsEl.innerHTML = `You scored ${score} out of ${questions.length}! 🌿`;
  nextBtn.style.display = "none";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

// Initial load
showQuestion();

// Joke API
document.getElementById("joke-btn").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke-text").textContent = data.value;
    });
});
