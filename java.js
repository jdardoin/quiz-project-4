const javascriptQuestions = [
    {
        question: "What is the correct way to declare a JavaScript variable?",
        choices: ["var name;", "variable name;", "v name;"],
        answer: "var name;"
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        choices: ["let", "const", "var"],
        answer: "const"
    },
    {
        question: "What is the result of the expression 5 + '5' in JavaScript?",
        choices: ["10", "'55'", "55"],
        answer: "'55'"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        choices: ["number", "boolean", "character"],
        answer: "character"
    },
    {
        question: "What does DOM stand for in the context of JavaScript?",
        choices: ["Document Object Model", "Data Object Model", "Dynamic Object Model"],
        answer: "Document Object Model"
    }
];
let index = 0
let time = 100
let score = 0
const questionEl = document.getElementById("question");
const openingmss = document.querySelector(".opening-message")
const timerEl = document.querySelector("#timer")
const quizEl = document.querySelector("#quiz")
const optionsEL = document.querySelector("#choices")

function game() {

    starttimer();
    displaynextquestion();
    openingmss.classList.add("hide");
    quizEl.classList.remove('hide');


}
let timer;
function starttimer() {
    timer = setInterval(function () {
        time--
        timerEl.textContent = "Time: " + time
        if (time <= 0) {
            endquiz()
            clearInterval(timer)
        }
    }, 1000)



}
function displaynextquestion() {
    let currentquestion = javascriptQuestions[index].question
    questionEl.innerText = currentquestion
    let optionset = javascriptQuestions[index].choices
    let currentoptions = ""
    for (var i = 0; i < optionset.length; i++) {
        currentoptions += `<p class="option">${optionset[i]}</p>`
        optionsEL.innerHTML = currentoptions
    }
}

optionsEL.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.matches("p")) {
        checkanswer(event.target.textContent)
    }
})
function checkanswer(clickedEl) {
    console.log(clickedEl)
    const correct = javascriptQuestions[index].answer
    if (clickedEl === correct) {
        score++

    }
    else {
        time -= 10
    }
    index++
    if (javascriptQuestions.length >= index) {
        displaynextquestion()
    }
    else {
        endquiz()

    }
}
function endquiz() {
    clearInterval(timer)
}
/* Click on button start timer*/
startButton.addEventListener('click', game)




// use end quiz funtion to call next





