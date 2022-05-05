const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<js>",
        c: "<javascript>",
        d: "<script>",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        a: "Both the head section and the body section are correct",
        b: "The head section",
        c: "The body section",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Is it necessary for the external script file to contain a <script> tag?",
        a: "Yes",
        b: "No",
        c: "Depends on the type of include",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "How many ways are there with which we can declare a variable in javascript?",
        a: "Only one",
        b: "Three",
        c: "Infinitely many",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Is a variable named 'apple' same as 'Apple' in javascript?",
        a: "Yes",
        b: "No",
        c: "Only when we use 'strict'",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))",
        a: "o",
        b: "f",
        c: "k",
        d: "s",
        correct: "d",
    },
    {
        question: "What will be the output of the following code snippet let gfg=”GeeksforGeeks” console.log(gfg.indexOf(‘G’))",
        a: "8",
        b: "0",
        c: "-1",
        d: "2",
        correct: "b",
    },
    {
        question: "Which of the following represent falsy values in javascript",
        a: "false",
        b: "''",
        c: "undefined",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following represent truthy values in javascript",
        a: "true",
        b: "{}",
        c: "[]",
        d: "All of the above",
        correct: "d",
    }
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
    return answer;
   
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
                <h2>You answered ${score}/${quizData.length} questions correctly in Javascript</h2>
                <button onclick="location.reload()">Reload</button>
                <button onclick=" window.print()" style="margin-top:20px;background-color:rgb(35, 251, 251);color:black">Print</button>
            `
           
        }
    }
})