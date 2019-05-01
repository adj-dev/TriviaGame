


// Define the questions along with their respective answers
var questions = [
  {
    ask: 'What is your favourite color?',
    answers: ['Blue', 'Red', 'Green', 'Yellow'],
    correctAnswer: 'Blue'
  },
  {
    ask: 'What is?',
    answers: ['Blue2', 'Red2', 'Green2', 'Yellow2'],
    correctAnswer: 'Blue'
  },
  {
    ask: 'What is your color?',
    answers: ['Blue3', 'Red3', 'Green3', 'Yellow3'],
    correctAnswer: 'Blue'
  },
  {
    ask: 'is your favorite color?',
    answers: ['Blue4', 'Red4', 'Green4', 'Yellow4'],
    correctAnswer: 'Blue'
  },
  {
    ask: 'What is your favorite',
    answers: ['Blue5', 'Red5', 'Green5', 'Yellow5'],
    correctAnswer: 'Blue'
  }
]

// Declare a variable to keep track of which question should be rendered
var index = 0;

//Render the question
function renderQuestion() {
  let question = questions[index];
  // Question
  let h3 = $('<h3>');
  h3.text(question.ask);
  $('.game-container').append(h3);
  // Answers
  for (answer of question.answers) {
    let p = $('<p>');
    p.text(answer);
    $('.game-container').append(p);
  }

  index++;
}

renderQuestion();


