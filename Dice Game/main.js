/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,dice,activeplayer;
scores = [99,0]
roundScore = 0;
var active = document.querySelector('.active')
activeplayer = 0;


var rolldice = document.querySelector('.btn-roll')
var hold = document.querySelector('.btn-hold') 
var newGame = document.querySelector('.btn-new')

newGame.addEventListener('click', reset)

function reset(){
   scores = [0,0];
   roundScore = 0;
   activeplayer = 0;
   document.querySelector('.dice').style.display = 'block';
   document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

rolldice.addEventListener("click",()=>{
   dice = Math.floor(Math.random() * 6 + 1)
   document.querySelector('.dice').src = `image/dice-${dice}.png`
   if (dice === 1){

      // activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
      switchPlayers();
   }else{
      roundScore = roundScore + dice
      document.querySelector(`#current-${activeplayer}`).textContent = roundScore

   }
});

hold.addEventListener('click', ()=>{
   scores[activeplayer] += roundScore
   let score = document.querySelector(`#score-${activeplayer}`)
   score.textContent = scores[activeplayer]
   if (score.textContent >= 100){
      document.querySelector('.dice').style.display = 'none';
      document.querySelector(`.player-${activeplayer}-panel`).classList.add('winner');
      document.getElementById(`name-${activeplayer}`).textContent = 'Winner';

   }
   else{
      switchPlayers();
   }

});


// this function is to switch players when dice becomes 1 or when player press hold button
function switchPlayers(){
   document.querySelector(`#current-${activeplayer}`).textContent = 0
   roundScore = 0;
   if (activeplayer === 0){
      let player = document.querySelector(`.player-${activeplayer}-panel`)
      player.classList.remove('active');
      activeplayer = 1;
      let nextPlayer = document.querySelector(`.player-${activeplayer}-panel`)
      nextPlayer.classList.add('active');


      
   } else{
      let player = document.querySelector(`.player-${activeplayer}-panel`);
      player.classList.remove('active');
      activeplayer = 0;
      let nextPlayer = document.querySelector(`.player-${activeplayer}-panel`);
      nextPlayer.classList.add('active');
   }
}
