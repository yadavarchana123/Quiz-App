const quizData = [
    {
        question: "Which of the following is not true about SQL statements?",
        a: "SQL statements are not case sensitive.",
        b: "SQL statements can be written on one or more lines.",
        c: "Keywords cannot be split across lines.",
        d: "Clauses must be written on separate lines",
        correct: "d",
    },
    {
        question: "What is returned by MOD(1000,30)",
        a: "33",
        b: "30",
        c: "3",
        d: "10",
        correct: "d",
    },
    {
        question: " Which of the following is true about SQL joins?",
        a: "The join condition is not separated from other search conditions in a query.",
        b: "The ON clause makes code difficult to understand",
        c: "The join condition for natural join is basically an equijoin of all columns with same name.",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "A subquery can be placed in which of the SQL clauses?",
        a: "The WHERE clause",
        b: "The HAVING clause",
        c: "The FROM clause",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following is true about modifying rows in a table?",
        a: "You can update some rows in a table based on values from another table",
        b: "If you try to update a record related to an integrity constraint, it raises an error.",
        c: " You can modify multiple columns",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following is not true about simple views?",
        a: "Yes",
        b: "No",
        c: "Only when we use 'strict'",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))",
        a: "They derive data from one table.",
        b: "They contain no functions or grouping.",
        c: "You cannot perform DML operations through a simple view",
        d: "All of the above are true",
        correct: "c",
    },
    {
        question: "Which of the following code will delete a sequence named loc_seq",
        a: "delete sequence loc-seq;",
        b: "drop sequence loc_seq;",
        c: "delete primary key loc_sec;",
        d: "drop primary key loc_sec;",
        correct: "b",
    },
    {
        question: " Which of the following code would create a role named student_admin",
        a: "CREATE student_admin;",
        b: "GRANT student_admin;",
        c: "CREATE ROLE student_admin;",
        d: "ROLE student_admin;",
        correct: "c",
    },
    {
        question: "The statement that is executed automatically by the system as a side effect of the modification of the database is",
        a: "backup",
        b: "assertion",
        c: "recovery",
        d: "trigger",
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
                <h2>You answered ${score}/${quizData.length} questions correctly in SQL</h2>
                <button onclick="location.reload()">Reload</button>
                <button onclick=" window.print()" style="margin-top:20px;background-color:rgb(35, 251, 251);color:black">Print</button>
            `
        }
    }
})
