const quiz = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score');
let score = 0;

quiz.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    const optionsContainer = event.target.parentElement;
    const questionDiv = optionsContainer.parentElement;
    const allOptions = optionsContainer.querySelectorAll('.option');

    // Prevent multiple selections for the same question
    if ([...allOptions].some(option => option.classList.contains('correct') || option.classList.contains('incorrect'))) {
      return;
    }

    const isCorrect = event.target.dataset.correct === 'true';
    const resultSymbol = document.createElement('span'); // Create a span for check/cross mark
    resultSymbol.style.marginLeft = '10px'; // Add some space from the text

    if (isCorrect) {
      event.target.classList.add('correct');
      resultSymbol.textContent = ' ✅';
      resultSymbol.style.color = 'green';
      score++;
    } else {
      event.target.classList.add('incorrect');
      resultSymbol.textContent = ' ❌';
      resultSymbol.style.color = 'red';
    }

    // Disable all buttons for this question
    allOptions.forEach(option => option.disabled = true);

    // Append check/cross mark next to the question
    questionDiv.querySelector('p').appendChild(resultSymbol);

    // Determine proficiency level
    let proficiencyLevel = "";
    if (score >= 20) {
      proficiencyLevel = "B2";
    } else if (score >= 15) {
      proficiencyLevel = "B1";
    } else if (score >= 10) {
      proficiencyLevel = "A2";
    } else if (score >= 5) {
      proficiencyLevel = "A1";
    } else {
      proficiencyLevel = "Beginner";
    }

    // Update the score and proficiency level display
    scoreDisplay.textContent = `Your Score: ${score} / 20 - Level: ${proficiencyLevel}`;
  }
});


const hamMenu = document.querySelector('.ham-menu');

const offScreen = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');     
    offScreen.classList.toggle('active');
});

