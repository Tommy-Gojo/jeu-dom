import  {prenom, hello} from './utilities.js';
import  {Personnage} from './Class.js';

// ###########################
// add into var a class and id
// ###########################

let buttonSelector = document.querySelector(".btn-start");
let beybladeHyperVitesse = document.querySelector("#fleche");
let btnAttackEnable = document.querySelector("#attack");
let btnSpecialEnable = document.querySelector("#special");
let youStarting = document.querySelector("#panneau");
let enemyVisual = document.querySelector(".enemy-visual");
// let listMonster = ["barzork l'admin", ]
// ###############################
// #### the start of the game ####
// ###############################


buttonSelector.addEventListener("click", function(){
    buttonSelector.classList.toggle("disable");
    enemyVisual.classList.toggle("disable");

    let random = Math.random();
    if (random < 0.5){
        beybladeHyperVitesse.setAttribute("class", "rotate");
        youStarting.textContent = "C'est au tour du Monstre !"
    }else{
        beybladeHyperVitesse.setAttribute("class", "rotate2");
        youStarting.textContent = "C'est ton tour !"
    }

btnAttackEnable.setAttribute("class", "nes-btn is-error");
btnSpecialEnable.setAttribute("class", "nes-btn is-success");

btnAttackEnable.classList.toggle("disable")

    
});

let tommy = new Personnage("Tommy", 50, 13);

let tabEnemies = [
    ["gerard le vilain", 20, 4],
    ["gerard le jobard", 23, 7],
    ["gerard le quatre quart", 27, 2],
    ["gerard le croupier", 13, 9],
]
console.log(tabEnemies[0][0])

tabEnemies.forEach(enemy =>{
    let newEnemy = new Personnage(enemy[0],enemy[1],enemy[2]);
    newEnemy.status();
})



let ruben = {
    nom: "Ruben",
    vie: 40,
    att: 12,
}

console.log(tommy);