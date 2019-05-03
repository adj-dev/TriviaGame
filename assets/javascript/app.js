
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

// Define timers
var time;
var timer;


function questionTimer() {
  time = 15;

  // render counter
  $('.timer').html(`<h1>${time}</h1>`);
  timer = setInterval(() => {
    if (time !== 1) {
      time--;
      $('.timer').html(`<h1>${time}</h1>`);
    } else {
      renderAnswer();
    }
  }, 1000);
}

function answerTimer() {
  time = 5;

  // render counter
  $('.timer').html(`<h1>${time}</h1>`);
  timer = setInterval(() => {
    if (time !== 1) {
      time--;
      $('.timer').html(`<h1>${time}</h1>`);
    } else if (!questions[index]) {
      clearInterval(timer);
      renderStart();
      addScore();
      index = 0;
    } else {
      clearInterval(timer);
      renderQuestion();
      questionTimer();
    }
  }, 1000);
}

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
  // reset timer
  clearInterval(timer);
  answerTimer();

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

// Render the score
function addScore() {
  // hide the timer
  $('.timer h1').hide();
  // inject HTML
  let h3 = $('<h3>');
  h3.text(`Correct: ${correctGuesses} Incorrect: ${incorrectGuesses}`);
  $('.game-container').prepend(h3);
}


$(function () {
  // render start button
  renderStart()
  // when start button is clicked, render the 1st question
  $(document).unbind('click').on('click', '.start h2', () => {
    renderQuestion();
    questionTimer();
  }).on('click', '.choice', renderAnswer);


  // $('.start h2').click(() => {
  //   renderQuestion();
  //   questionTimer();
  // });


  // add click handler for user selected answers
  // $(document).unbind('click').on('click', '.choice', renderAnswer);
});


