
// Define the questions along with their respective answers
var questions = [
  {
    ask: 'What fictional city is the home of Batman?',
    answers: ['Metropolis', 'Gotham City', 'Emerald City', 'New York City'],
    correctAnswer: 'Gotham City'
  },
  {
    ask: 'Spinach is high in which mineral?',
    answers: ['Calcium', 'Potassium', 'Sodium', 'Iron'],
    correctAnswer: 'Iron'
  },
  {
    ask: 'What is the total number of dots on a pair of dice?',
    answers: ['42', '21', '12', '15'],
    correctAnswer: '42'
  },
  {
    ask: 'Which Roman emperor supposedly fiddled while Rome burned?',
    answers: ['Augustus', 'Nero', 'Commodus', 'Tiberius'],
    correctAnswer: 'Nero'
  },
  {
    ask: 'Which planet is the closest to Earth?',
    answers: ['Venus', 'Mars', 'Jupiter', 'Moon'],
    correctAnswer: 'Venus'
  },
  {
    ask: 'Which sign of the zodiac is represented by the ram?',
    answers: ['Taurus', 'Aries', 'Leo', 'Virgo'],
    correctAnswer: 'Aries'
  },
  {
    ask: 'What is the name of the city where the cartoon family, the Simpsons, live?',
    answers: ['South Park', 'Plainsville', 'Gotham City', 'Springfield'],
    correctAnswer: 'Springfield'
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
  h3.text(`Correct: ${correctGuesses}     Incorrect: ${incorrectGuesses}`);
  $('.game-container').prepend(h3);
}


$(function () {
  // render start button
  renderStart()
  // when start button is clicked, render the 1st question
  $(document).on('click', '.start h2', () => {
    renderQuestion();
    questionTimer();
  }).on('click', '.choice', renderAnswer);
});


