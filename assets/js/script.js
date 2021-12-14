//* Indentifiers *//
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





