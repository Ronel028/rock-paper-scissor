
// Declare variabless
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let indicator = document.getElementById('win-indicator');
let playerC = document.getElementById('player-choice');
let computerC = document.getElementById('computer-choice');
let fight = document.querySelector('.fight-container');

let selection = document.querySelector('.selection-container');

let scoreComputer = 0 + 1;
let scorePlayer = 0 + 1;

// Event listener for rock
rock.addEventListener('click', function(){
    rock.value = 'rock';

    let player = rock.value;
    let computer = computerChoice();

    fight.style.display = 'block'; 
    selection.style.display = 'none';

    if(player === computer){
        indicator.innerText = 'Its a Draw';
        indicator.classList.add('color-draw');
        playerC.innerHTML = `<i class="rotate fas fa-hand-rock"></i>`;
        computerC.innerHTML = `<i class="flipRock fas fa-hand-rock"></i>`;
    }
    else if(computer === 'paper'){
        computerScore.innerHTML = `<p>${scoreComputer++}</p>`;
        indicator.innerText = 'You Lost';
        indicator.classList.add('color-lost');
        playerC.innerHTML = `<i class="rotate fas fa-hand-rock"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
    }
    else if(computer === 'scissor'){
        playerScore.innerHTML = `<p>${scorePlayer++}</p>`;
        indicator.innerText = 'You Win';
        indicator.classList.add('color-win');
        playerC.innerHTML = `<i class="rotate fas fa-hand-rock"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
    }

});

// Event listener for paper
paper.addEventListener('click', function(){
    paper.value = 'paper';

    let player = paper.value;
    let computer = computerChoice();

    fight.style.display = 'block';
    selection.style.display = 'none';

    if(player === computer){
        indicator.innerText = 'Its a Draw';
        indicator.classList.add('color-draw');
        playerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
    }
    else if(computer === 'rock'){
        playerScore.innerHTML = `<p>${scorePlayer++}</p>`;
        indicator.innerText = 'You Win';
        indicator.classList.add('color-win');
        playerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        computerC.innerHTML = `<i class="flipRock fas fa-hand-rock"></i>`;
        
    }
    else if(computer === 'scissor'){
        computerScore.innerHTML = `<p>${scoreComputer++}</p>`;
        indicator.innerText = 'You Lost';
        indicator.classList.add('color-lost');
        playerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        
    }
});

// event listener for scissor
scissor.addEventListener('click', function(){
    scissor.value = 'scissor';

    let player = scissor.value;
    let computer = computerChoice();

    fight.style.display = 'block';
    selection.style.display = 'none';

    if(player === computer){
        indicator.innerText = 'Its a Draw';
        indicator.classList.add('color-draw');
        playerC.innerHTML = `<i class="scale fas fa-hand-scissors"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
    }
    else if(computer === 'rock'){
        computerScore.innerHTML = `<p>${scoreComputer++}</p>`;
        indicator.innerText = 'You Lost';
        indicator.classList.add('color-lost');
        playerC.innerHTML = `<i class="scale fas fa-hand-scissors"></i>`;
        computerC.innerHTML = `<i class="flipRock fas fa-hand-rock"></i>`;
        
    }
    else if(computer === 'paper'){
        playerScore.innerHTML = `<p>${scorePlayer++}</p>`;
        indicator.innerText = 'You Win';
        indicator.classList.add('color-win');
        playerC.innerHTML = `<i class="scale fas fa-hand-scissors"></i>`;
        computerC.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        
    }
});

// computer choice
function computerChoice(){
    let com;
    let rnd = Math.floor(Math.random() * 3);
    
    if(rnd === 0){
        com = 'rock';
    }
    else if(rnd === 1){
        com = 'paper';
    }
    else{
        com = 'scissor';
    }

    return com;
}

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
     fight.style.display = 'none';
     indicator.classList.remove('color-win');
     indicator.classList.remove('color-lost');
     indicator.classList.remove('color-draw');
     selection.style.display = 'flex';
})

