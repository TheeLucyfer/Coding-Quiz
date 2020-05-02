
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
let currentScoreDisplay = document.getElementById("taco") 
let time = document.getElementById("main")
let questionIndex = 0
let secondsLeft = 5
let answerButtons = []
let correctAnswers = 0

let startGame = function(){
    clock()
    button.remove()

    for (let index = 0; index < 4; index++) {
      let btn = document.createElement("button")
      answerButtons.push(btn);

      btn.setAttribute("class", "btn btn-dark p-3 m-2")
      btn.addEventListener("click", clicked)

      let newButtons = document.getElementById("answerContainer")
      newButtons.appendChild(btn)
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
    currentScoreDisplay.textContent = `Current Score: ${correctAnswers}`
    

}

button.addEventListener("click", startGame)

function clicked(ev) {
    if(ev.target.textContent === questions[questionIndex].answer){
        result.innerHTML = "Correct"
        correctAnswers++;
        console.log(correctAnswers)
    }
    else{
        result.innerHTML = "Wrong"
    } 
    questionIndex++
    updateUI()
}

function clock(){
  var  timerInterval = setInterval(function(){
    secondsLeft--;
  time.textContent = secondsLeft + " seconds left"
  time.setAttribute("class", "red" )
   
    if (secondsLeft === 0) {
      clearInterval(timerInterval)
      answerButtons[0].remove()
      answerButtons[1].remove()
      answerButtons[2].remove()
      answerButtons[3].remove()
      result.remove()
      text.textContent = "Game over"
      
      button.setAttribute("class", "btn btn-dark p-3 m-2")
        //enter in the function that I use to create 
      button.addEventListener("click", saveStats)
      button.removeEventListener("click", startGame)
        let newButtons = document.getElementById("answerContainer")
        let newInput =document.createElement("input")
        newInput.setAttribute("placeholder", "Initials go here")
        newInput.setAttribute("id", "storage")
        button.textContent = "Submit Score"
        newButtons.appendChild(newInput)
        newButtons.appendChild(button)

    }


}, 500);
  
}

function checkLocalStorage(){

}
function saveStats(){
  let initials = document.querySelector("#storage").value  
  let highScore = correctAnswers
  let taco = localStorage.getItem("highScore")
  if (!taco){
    taco = []
  }
  taco.push({
     highScore: highScore, 
     initials: initials,

  })
  
  // localStorageInitialize = document.querySelector("#storage").textContent

}