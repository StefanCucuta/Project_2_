// Indentifiers
let userScore = 0;
let compScore = 0;
let pervScores = JSON.parse(localStorage.getItem("pervScores")) || [];
const userScore_span = document.getElementById("score");
const compScore_span = document.getElementById("incorect");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");
const button_reset = document.querySelector(".reset");
const button_rules = document.querySelector(".rules");
const button_save = document.querySelector(".save");
const button_close_rules = document.querySelector("#close_rules");
const button_close_save = document.querySelector("#close_save");
const popup = document.getElementById("dPopupContainer");
const save_popup = document.getElementById("save_popup");
const submit_save = document.getElementById("submit_save");
const score_list_element = document.getElementById("scores");


// Score & Name list Storage


function saveScore(name) {
    if (userScore && compScore && name) {
        const score = {
            name: name,
            score: userScore,
            computer: compScore,
        };
        pervScores.push(score);

        localStorage.setItem("pervScores", JSON.stringify(pervScores));
        resetScore();
        renderScore();
    } else {
        if (!userScore || !compScore) alert("You have to play first !");
        else alert("Name is required !");
    }
}

function renderScore() {
    score_list_element.innerHTML = pervScores
        .map(function (score) {
            return `<li><strong>${score.name}<strong> ${score.score}
        - ${score.computer} <strong>Computer</strong> </li>`;
        })
        .join(" ");
}

// Game Result Display

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function WIN(userChoice, compChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} -  <small>beats</small>  - 
        ${compChoice} <br>  <span class = 'win'> You Win ! </span>`;
}

function LOST(userChoice, compChoice) {

    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice}  -  <small> is beaten by </small>  -
        ${compChoice} <br>  <span class = 'lost'> You Lost ! </span> `;
}


function DRAW(userChoice, compChoice) {
    result_p.innerHTML = `${userChoice}   =   ${compChoice}  <br> Is a Draw !`;
}


