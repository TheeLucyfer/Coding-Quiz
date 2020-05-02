
var questions = [

    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },

    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },

    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },

    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },

    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];


let button = document.getElementById("selector")
let text = document.getElementById("question")
let finish = document.getElementById("result")
let questionIndex = 0

let answerButtons = []


let startGame = function(){
    button.remove()
    answerButtons.push(document.createElement("button"))
    answerButtons.push(document.createElement("button"))
    answerButtons.push(document.createElement("button"))
    answerButtons.push(document.createElement("button"))

    
    
    for (let index = 0; index < answerButtons.length; index++) {
        const element = answerButtons[index];
        element.setAttribute("class", "btn btn-dark p-3 m-2")
        element.addEventListener("click", clicked)
        let newButtons = document.getElementById("answerContainer")
        newButtons.appendChild(element)
    } 

    updateUI()
}

function updateUI() {
    let question = questions[questionIndex]
    text.textContent = question.title
    answerButtons[0].textContent = question.choices[0]
    answerButtons[1].textContent = question.choices[1]
    answerButtons[2].textContent = question.choices[2]
    answerButtons[3].textContent = question.choices[3]
}


button.addEventListener("click", startGame)
function clicked(ev) {
    if(ev.target.textContent === questions[questionIndex].answer){
        result.innerHTML = "Correct"
        
    }
    else{
        result.innerHTML = "Wrong"
    } 
    questionIndex++
    updateUI()
}