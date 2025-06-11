let currentQuestion = {};
let score = 0;

function generateQuestion() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  currentQuestion = {
    question: `Berapakah ${a} × ${b}?`,
    answer: a * b,
  };

  document.getElementById("question").textContent = currentQuestion.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === currentQuestion.answer) {
    score++;
    document.getElementById("feedback").textContent = `Benar! Skormu: ${score}`;
  } else {
    document.getElementById("feedback").textContent = `Salah. Jawaban yang benar: ${currentQuestion.answer}`;
  }
}

window.onload = generateQuestion;
