const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const compChoice_p = document.querySelector('.result .compChoice_p')
const result_p = document.querySelector('.result .resultsHere');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

let userScore = 0;
let compScore = 0;
let choices =['Rock', 'Paper', 'Scissor']

rock_div.addEventListener('click', function(){
    gameResult(0)
})

paper_div.addEventListener('click', function(){
    gameResult(1)
})

scissors_div.addEventListener('click', function(){
    gameResult(2)
})

function gameResult(choiceNumber){
    let userChoice = choices[choiceNumber]
    let compChoice = choices[Math.floor(Math.random() * 3)]
    const tempoIntervalo = 150
    if(userChoice == compChoice){
        compChoice_p.innerHTML = `Machine picked ${userChoice}`
        result_p.innerHTML = 'Its a Draw!'
        scoreBoard_div.style.background = 'rgb(150, 205, 255)'
    } else if(userChoice == 'Rock' && compChoice == 'Scissor' || userChoice == 'Scissor' && compChoice == 'Paper' ||            userChoice == 'Paper' && compChoice == 'Rock'){
        userScore++
        compChoice_p.innerHTML = `Machine picked ${compChoice}`
        result_p.innerHTML = 'YOU WIN!'
        userScore_span.innerHTML = userScore
        scoreBoard_div.style.background = 'rgb(125, 255, 125)'
    } else if(userChoice == 'Rock' && compChoice == 'Paper' || userChoice == 'Scissor' && compChoice == 'Rock' ||               userChoice == 'Paper' && compChoice == 'Scissor'){
        compScore++
        compChoice_p.innerHTML = `Machine picked ${compChoice}`
        result_p.innerHTML = 'You lose.'
        compScore_span.innerHTML = compScore
        scoreBoard_div.style.background = 'rgb(255, 180, 180)'
   }
}