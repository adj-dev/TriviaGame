/*
Add variables to hold data such as number of correct guesses,
number of incorrect guesses. 
2.
For end of game check if (!questions[index])
*/


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
    correctAnswer: 'Red2'
  },
  {
    ask: 'What is your color?',
    answers: ['Blue3', 'Red3', 'Green3', 'Yellow3'],
    correctAnswer: 'Green3'
  },
  {
    ask: 'is your favorite color?',
    answers: ['Blue4', 'Red4', 'Green4', 'Yellow4'],
    correctAnswer: 'Yellow4'
  },
  {
    ask: 'What is your favorite',
    answers: ['Blue5', 'Red5', 'Green5', 'Yellow5'],
    correctAnswer: 'Blue5'
  }
]

// Declare the tracking variables
var index = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;

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
    p.addClass('choice');
    p.text(answer);
    $('.game-container').append(p);
  }
}

// Add a conditional for wrong vs correct answers
function renderAnswer() {
  let choice = $(this).text();
  let answer = questions[index].correctAnswer;

  // If the user selected the correct answer
  let h2 = $('<h2>');
  if (choice === answer) {
    h2.text("That's correct!");
    correctGuesses++;
  } else {
    h2.text("Oops! Maybe next time...")
    incorrectGuesses++;
  }


  let p = $('<p>');
  p.text(`The answer is: ${answer}`);

  $('.game-container').empty();
  $('.game-container').append(h2);
  $('.game-container').append(p);

  // Increment index
  index++;
  console.log(correctGuesses, incorrectGuesses, index);
}

// Render the "Start Page"
function renderStart() {
  // clear the div
  $('.game-container').empty();
  // inject HTML
  let div = $('<div>');
  let h2 = $('<h2>');
  div.addClass('start');
  h2.text('Start');
  div.append(h2);
  $('.game-container').html(div);
}


$(function () {
  // render start button
  renderStart()
  // when start button is clicked, render the 1st question
  $('.start h2').click(renderQuestion);
  // add click handler for user selected answers
  $(document).unbind('click').on('click', '.choice', renderAnswer);
});


