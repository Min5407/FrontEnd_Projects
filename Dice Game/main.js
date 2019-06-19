/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,dice,activeplayer;
scores = [0,0]
roundScore = 0;
var active = document.querySelector('.active')
activeplayer = 0;


var rolldice = document.querySelector('.btn-roll')
rolldice.addEventListener("click",()=>{
   dice = Math.floor(Math.random() * 6 + 1)
   document.querySelector('.dice').src = `image/dice-${dice}.png`
   if (dice === 1){
      document.querySelector(`#current-${activeplayer}`).textContent = 0
      roundScore = 0;
      activeplayer ===0 ? activeplayer = 1 : activeplayer = 0;
      // if (activeplayer === 0){
      //    activeplayer = 1;
      // } else{
      //    activeplayer = 0;
      // }
   }else{
      roundScore = roundScore + dice
      document.querySelector(`#current-${activeplayer}`).textContent = roundScore

   }
});




