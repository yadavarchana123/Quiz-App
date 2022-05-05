const quizData = [
    {
        question: "How is document type initialized in HTML5.?",
        a: "</DOCTYPE HTML>",
        b: "</DOCTYPE>",
        c: "<!DOCTYPE HTML>",
        d: "</DOCTYPE html>",
        correct: "c",
    },
    {
        question: "Which of the following HTML Elements is used for making any text bold ?",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following HTML element is used for creating an unordered list?",
        a: "<ui>",
        b: "<i>",
        c: "<ul>",
        d: "<em>",
        correct: "c",
    },
   {
        question: "Which of the following characters indicate closing of a tag?",
        a: ".",
        b: "/",
        c: "//",
        d: "!",
        correct: "b",
    },
   {
        question: "What is the font-size of the h1 heading tag?",
        a: "3.5em",
        b: "2.17em",
        c: "2em",
        d: "1.5em",
        correct: "c",
    },
   {
        question: "How many heading tags are there in HTML5?",
        a: "2",
        b: "3",
        c: "5",
        d: "6",
        correct: "d",
    },
  {
        question: "How many attributes are there in HTML5?",
        a: "2",
        b: "4",
        c: "1",
        d: "5",
        correct: "a",
    },
  {
        question: "Which of the following attributes is used to add link to any element?",
        a: "link",
        b: "ref",
        c: "href",
        d: "newref",
        correct: "c",
    },
  {
        question: " HTML tags are surrounded by ___ brackets.",
        a: "Angle",
        b: "Curly",
        c: "Round",
        d: "Squart",
        correct: "a",
    },
];




const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly in HTML</h2>
                <button onclick="location.reload()">Reload</button>
                <button onclick=" window.print()" style="margin-top:20px;background-color:rgb(35, 251, 251);color:black">Print</button>
            `
        }
    }
})