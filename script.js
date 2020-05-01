let button = document.getElementById("selector")
let text = document.getElementById("question")





let startGame = function(){
    text.textContent = "Question here"
    button.textContent = "Test"
}




button.addEventListener("click", startGame)