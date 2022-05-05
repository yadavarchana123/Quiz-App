const quizData = [
    {
        question: "Which of the below is the abbreviation of CSS ?",
        a: "Cascade sheets style",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "Coded Style Sheet",
        correct: "c",
    },
    {
        question: "Which of the correct syntax to add the external stylesheet in CSS ?",
        a: "<style src = quiz.css>",
        b: '"<style src = "quiz.css">"',
        c: "<stylesheet> quiz.css </stylesheet>",
        d: '"<link rel="stylesheet" type="quiz/css" href="quiz.css">"',
        correct: "d",
    },
    {
        question: "Which of the below CSS properties is used to change the background color of CSS ?",
        a: "bg color",
        b: "color-background",
        c: "background-color",
        d: "color",
        correct: "c",
    },
    {
        question: "Which of the below CSS class is used to change the text color of CSS ?",
        a: "background-color",
        b: "color",
        c: "color-background",
        d: "None of the above",
        correct: "b",
    },
   {
        question: "Which of the below is correct syntax when we put a line over text in CSS ?",
        a: "text-decoration: line",
        b: "text-decoration: none",
        c: "text-decoration: overline",
        d: "text-decoration: underline",
        correct: "c",
    },
   {
        question: "Which below property in CSS is used to set the indentation of the first line in a block of text ?",
        a: "text-indent property",
        b: "text-underlne-property",
        c: "text-decoration none",
        d: "text-overflow property",
        correct: "a",
    },
   {
        question: "Which of the below CSS properties represent the order of flex items in the grid container ?",
        a: "order",
        b: "float",
        c: "overflow",
        d: "All of the above",
        correct: "a",
    },
  {
        question: "How do we set the default width of the font in CSS ?",
        a: "font-stretch",
        b: "font-weight",
        c: "text-transform",
        d: "font-variant",
        correct: "a",
    },
  {
        question: "Which element is used to represent the transparency of an element in CSS ?",
        a: "Hover",
        b: "Opacity",
        c: "Transparent",
        d: "Overlay",
        correct: "b",
    },
  {
        question: "Which of the below CSS property is used to add a stroke in the text ?",
        a: "text-stroke",
        b: "text-transform",
        c: "text-decoration",
        d: "None of the above",
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
                <h2>You answered ${score}/${quizData.length} questions correctly in CSS</h2>
                <button onclick="location.reload()">Reload</button>
                <button onclick=" window.print()" style="margin-top:20px;background-color:rgb(35, 251, 251);color:black">Print</button>
            `
        }
    }
})