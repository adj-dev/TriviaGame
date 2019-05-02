
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
  // empty the div
  $('.game-container').empty();
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
}

// Add a conditional for wrong vs correct answers
function renderAnswer() {
  let answer = questions[index].correctAnswer;

  let h2 = $('<h2>');
  h2.text("That's correct!");

  let p = $('<p>');
  p.text(`The answer is: ${answer}`);

  $('.game-container').empty();
  $('.game-container').append(h2);
  $('.game-container').append(p);
}

renderQuestion();

// renderAnswer();

// Render the "Start Page"
function renderStart() {
  // clear the div
  $('.game-container').empty();
  // inject HTML
  let div = $('<div>');
  let h2 = $('<h2>');
  div.addClass('start')
  h2.text('Start');
  div.append(h2);
  $('.game-container').html(div);
}


// On load: render the start button
$(function () {
  renderStart()
  $('.start h2').click(renderQuestion);
});


