// Quiz Application JavaScript

// Quiz data with questions for each category
const quizData = {
    general: {
        title: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "In which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "Which continent is the largest by area?",
                options: ["Africa", "Asia", "North America", "Europe"],
                correct: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correct: 2
            },
            {
                question: "Which gas makes up the majority of Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 1
            }
        ]
    },
    science: {
        title: "Science",
        questions: [
            {
                question: "What is the speed of light in a vacuum?",
                options: ["300,000 km/s", "299,792,458 m/s", "150,000 km/s", "186,282 miles/s"],
                correct: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "Which organ in the human body produces insulin?",
                options: ["Liver", "Kidney", "Pancreas", "Heart"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1
            },
            {
                question: "What gas do plants absorb from the atmosphere during photosynthesis?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "CH4"],
                correct: 0
            },
            {
                question: "Which scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Brain", "Liver", "Lungs", "Skin"],
                correct: 3
            },
            {
                question: "At what temperature does water boil at sea level?",
                options: ["90°C", "95°C", "100°C", "105°C"],
                correct: 2
            }
        ]
    },
    sports: {
        title: "Sports",
        questions: [
            {
                question: "How many players are on a basketball team on the court at one time?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
                correct: 1
            },
            {
                question: "How often are the Summer Olympic Games held?",
                options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                correct: 2
            },
            {
                question: "What is the maximum score possible in ten-pin bowling?",
                options: ["200", "250", "300", "350"],
                correct: 2
            },
            {
                question: "In soccer, how long is a standard match?",
                options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
                correct: 1
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Argentina", "Brazil", "Italy"],
                correct: 2
            },
            {
                question: "In tennis, what does 'love' mean?",
                options: ["1 point", "15 points", "30 points", "0 points"],
                correct: 3
            },
            {
                question: "How many holes are there in a standard round of golf?",
                options: ["16", "18", "20", "22"],
                correct: 1
            },
            {
                question: "In baseball, how many strikes result in an out?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "Which sport is known as 'the beautiful game'?",
                options: ["Basketball", "Tennis", "Soccer", "Cricket"],
                correct: 2
            }
        ]
    },
    history: {
        title: "History",
        questions: [
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                correct: 1
            },
            {
                question: "Which ancient wonder of the world was located in Alexandria?",
                options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse", "Temple of Artemis"],
                correct: 2
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Persian Empire", "Byzantine Empire"],
                correct: 1
            },
            {
                question: "In which year did World War I begin?",
                options: ["1912", "1913", "1914", "1915"],
                correct: 2
            },
            {
                question: "Who invented the printing press?",
                options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"],
                correct: 1
            },
            {
                question: "Which country gifted the Statue of Liberty to the United States?",
                options: ["England", "Spain", "France", "Italy"],
                correct: 2
            },
            {
                question: "In which year did the American Civil War end?",
                options: ["1863", "1864", "1865", "1866"],
                correct: 2
            }
        ]
    },
    geography: {
        title: "Geography",
        questions: [
            {
                question: "What is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
                correct: 1
            },
            {
                question: "Which mountain range contains Mount Everest?",
                options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
                correct: 3
            },
            {
                question: "What is the smallest continent by land area?",
                options: ["Europe", "Australia", "Antarctica", "South America"],
                correct: 1
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
                correct: 2
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "United States", "China", "Canada"],
                correct: 0
            },
            {
                question: "What is the deepest ocean trench?",
                options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Peru-Chile Trench"],
                correct: 1
            },
            {
                question: "Which African country is completely surrounded by South Africa?",
                options: ["Swaziland", "Lesotho", "Botswana", "Mozambique"],
                correct: 1
            },
            {
                question: "What is the highest waterfall in the world?",
                options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
                correct: 2
            },
            {
                question: "Which sea is the saltiest in the world?",
                options: ["Red Sea", "Dead Sea", "Caspian Sea", "Mediterranean Sea"],
                correct: 1
            }
        ]
    }
};

// Quiz state
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizCompleted = false;

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const categoryButtons = document.querySelectorAll('.category-btn');
const categoryTitle = document.getElementById('category-title');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const resultDetails = document.getElementById('result-details');
const restartButton = document.getElementById('restart-btn');
const sameCategoryButton = document.getElementById('same-category-btn');

// Event listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => startQuiz(button.dataset.category));
});

answerButtons.forEach(button => {
    button.addEventListener('click', () => selectAnswer(button));
});

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
sameCategoryButton.addEventListener('click', retrySameCategory);

// Initialize quiz
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizCompleted = false;
    
    const categoryData = quizData[category];
    categoryTitle.textContent = categoryData.title;
    
    showScreen(quizScreen);
    loadQuestion();
    updateScore();
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function loadQuestion() {
    const categoryData = quizData[currentCategory];
    const question = categoryData.questions[currentQuestionIndex];
    
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${categoryData.questions.length}`;
    questionText.textContent = question.question;
    
    answerButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.classList.remove('selected', 'correct', 'incorrect');
        button.disabled = false;
    });
    
    selectedAnswer = null;
    nextButton.disabled = true;
    nextButton.textContent = currentQuestionIndex === categoryData.questions.length - 1 ? 'Finish Quiz' : 'Next Question';
}

function selectAnswer(button) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = parseInt(button.dataset.answer.charCodeAt(0) - 65); // Convert A,B,C,D to 0,1,2,3
    button.classList.add('selected');
    
    const categoryData = quizData[currentCategory];
    const question = categoryData.questions[currentQuestionIndex];
    const correctAnswer = question.correct;
    
    // Show correct answer after a brief delay
    setTimeout(() => {
        answerButtons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedAnswer && selectedAnswer !== correctAnswer) {
                btn.classList.add('incorrect');
            }
        });
        
        if (selectedAnswer === correctAnswer) {
            score++;
            updateScore();
        }
        
        nextButton.disabled = false;
    }, 500);
}

function nextQuestion() {
    const categoryData = quizData[currentCategory];
    
    if (currentQuestionIndex < categoryData.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function showResults() {
    const categoryData = quizData[currentCategory];
    const totalQuestions = categoryData.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    finalScore.textContent = score;
    document.querySelector('.score-total').textContent = `/ ${totalQuestions}`;
    
    let message, details;
    if (percentage >= 90) {
        message = "Excellent! 🏆";
        details = "You're a true expert in this category!";
    } else if (percentage >= 70) {
        message = "Great Job! 🎉";
        details = "You have a solid understanding of the subject.";
    } else if (percentage >= 50) {
        message = "Good Effort! 👍";
        details = "You're on the right track, keep learning!";
    } else {
        message = "Keep Trying! 📚";
        details = "Practice makes perfect, don't give up!";
    }
    
    resultMessage.textContent = message;
    resultDetails.textContent = `You scored ${percentage}% in ${categoryData.title}. ${details}`;
    
    showScreen(resultsScreen);
}

function restartQuiz() {
    showScreen(welcomeScreen);
}

function retrySameCategory() {
    startQuiz(currentCategory);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    showScreen(welcomeScreen);
});