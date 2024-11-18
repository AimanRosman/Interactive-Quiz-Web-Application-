	const quizData = [ 
  {     question: 'What is the opposite of "happy"?',     options: ['Sad', 'Angry', 'Excited', 'Joyful'],     answer: 'Sad', 
  },   {     question: 'Which word means the same as "big"?',     options: ['Small', 'Huge', 'Tiny', 'Large'],     answer: 'Large', 
  },   {     question: 'Choose the correct spelling: "Accommodation" or 
"Acommodation"?',     options: ['Accommodation', 'Acommodation'],     answer: 'Accommodation', 
  },   {     question: 'What is the past tense of "sing"?',     options: ['Sang', 'Singed', 'Sung', 'Sing'],     answer: 'Sang', 
  },   {     question: 'Which word is a synonym for "happy"?',     options: ['Sad', 'Angry', 'Ecstatic', 'Confused'],     answer: 'Ecstatic', 
  },   { 
    question: 'What is the plural form of "child"?',     options: ['Childs', 'Children', 'Childen', 'Chilren'],     answer: 'Children', 
  },   {     question: 'Which word is an adverb: "Quickly" or "Quick"?',     options: ['Quickly', 'Quick'],     answer: 'Quickly', 
  },   {     question: 'What is the opposite of "success"?',     options: ['Failure', 'Victory', 'Achievement', 'Winning'], 

	    answer: 'Failure', 
  },   {     question: 'Identify the correct sentence: "She is going to the store" or 
"She are going to the store"?',     options: ['She is going to the store', 'She are going to the store'],     answer: 'She is going to the store', 
  },   {     question: 'Which word is a synonym for "angry"?',     options: ['Happy', 'Irate', 'Calm', 'Furious'],     answer: 'Furious', 
  }, 
];  const quizContainer = document.getElementById('quiz'); const resultContainer = document.getElementById('result'); const submitButton = document.getElementById('submit'); const retryButton = document.getElementById('retry'); 
const showAnswerButton = document.getElementById('showAnswer'); 
 let currentQuestion = 0; let score = 0; let incorrectAnswers = []; 
 function shuffleArray(array) {   for (let i = array.length - 1; i > 0; i--) {     const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
}  
function displayQuestion() {   const questionData = quizData[currentQuestion]; 
   const questionElement = document.createElement('div');   questionElement.className = 'question'; 
  questionElement.innerHTML = questionData.question; 
   const optionsElement = document.createElement('div');   optionsElement.className = 'options'; 
 
  const shuffledOptions = [...questionData.options];   shuffleArray(shuffledOptions); 
 
  for (let i = 0; i < shuffledOptions.length; i++) {     const option = document.createElement('label');     option.className = 'option'; 
     const radio = document.createElement('input');     radio.type = 'radio';     radio.name = 'quiz';     radio.value = shuffledOptions[i];  

	    const optionText = document.createTextNode(shuffledOptions[i]); 
     option.appendChild(radio);     option.appendChild(optionText);     optionsElement.appendChild(option); 
  }    quizContainer.innerHTML = '';   quizContainer.appendChild(questionElement);   quizContainer.appendChild(optionsElement); 
}  function checkAnswer() {   const selectedOption = document.querySelector('input[name="quiz"]:checked');   if (selectedOption) {     const answer = selectedOption.value;     if (answer === quizData[currentQuestion].answer) {       score++;     } else {       incorrectAnswers.push({         question: quizData[currentQuestion].question,         incorrectAnswer: answer,         correctAnswer: quizData[currentQuestion].answer, 
      });     }     currentQuestion++;     selectedOption.checked = false;     if (currentQuestion < quizData.length) {       displayQuestion(); 
    } else { 
      displayResult(); 
    } 
  } 
}  function displayResult() { 
  quizContainer.style.display = 'none';   submitButton.style.display = 'none';   retryButton.style.display = 'inline-block';   showAnswerButton.style.display = 'inline-block';   resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`; }  function retryQuiz() {   currentQuestion = 0;   score = 0; 
  incorrectAnswers = [];   quizContainer.style.display = 'block';   submitButton.style.display = 'inline-block';   retryButton.style.display = 'none';   showAnswerButton.style.display = 'none';   resultContainer.innerHTML = '';   displayQuestion(); 
} 

	 function showAnswer() {   quizContainer.style.display = 'none';   submitButton.style.display = 'none';   retryButton.style.display = 'inline-block';   showAnswerButton.style.display = 'none'; 
   let incorrectAnswersHtml = '';   for (let i = 0; i < incorrectAnswers.length; i++) {     incorrectAnswersHtml += ` 
      <p> 
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br> 
        <strong>Your Answer:</strong> 
${incorrectAnswers[i].incorrectAnswer}<br> 
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer} 
      </p> 
    `; 
  }    resultContainer.innerHTML = ` 
    <p>You scored ${score} out of ${quizData.length}!</p> 
    <p>Incorrect Answers:</p> 
    ${incorrectAnswersHtml} 
  `; 
}  submitButton.addEventListener('click', checkAnswer); retryButton.addEventListener('click', retryQuiz); showAnswerButton.addEventListener('click', showAnswer); 
 displayQuestion(); 
 
