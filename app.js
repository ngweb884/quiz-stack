const quizData = [
    {
      question: 'What is the capital of Australia ?',
      options: ['Melborne', 'Canberra', 'Sydney', 'London'],
      correctAnswer: 'Canberra'
    },
    {
      question: 'What is Bitcoin?',
      options: ['Smart phone', 'Digital Coin', 'Digital News', 'Chocolate coin'],
      correctAnswer: 'Digital Coin'
    },
    {
      question: 'What is 2 + 2?',
      options: ['4', '8', '10', '2'],
      correctAnswer: '4'
    }
  ];
  
  let stack = [...quizData];
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const resultElement = document.getElementById('result');
  
    const currentQuestion = stack.pop();
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
      optionsContainer.appendChild(button);
    });
  
    resultElement.textContent = '';
  }
  
  function checkAnswer(selectedOption, correctAnswer) {
    const resultElement = document.getElementById('result');
  
    if (selectedOption === correctAnswer) {
      resultElement.textContent = 'Correct!';
      score++;
    } else {
      resultElement.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
    }
  }
  
  function nextQuestion() {
    if (stack.length > 0) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }
  
  function showFinalResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Quiz Completed</h2>
                               <p>Your score is: ${score} out of ${quizData.length}</p>`;
  }
  
  // Initial load
  loadQuestion();
  