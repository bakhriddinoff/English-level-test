const quiz = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score');
let score = 0;

quiz.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    const isCorrect = event.target.dataset.correct === 'true';
    if (isCorrect) {
      event.target.classList.add('correct');
      score++;
    } else {
      event.target.classList.add('incorrect');
    }
  }
  scoreDisplay.textContent = `Your Score: ${score} / 20`;
});
