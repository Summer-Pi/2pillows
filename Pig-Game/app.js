/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

//$('#current-' + activePlayer).html("<em>" + dice + "</em>");

$('.btn-roll').click(function() {
    if(gamePlaying) {
         dice1 = Math.floor(Math.random() * 6 + 1);
         dice2 = Math.floor(Math.random() * 6 + 1);
        $('#dice-1').css("display","block");
        $('#dice-2').css("display","block");

        $('#dice-1').attr('src','dice-'+ dice1 +'.png');
        $('#dice-2').attr('src','dice-'+ dice2 +'.png');

       
        if(dice1 !== 1 && dice2 !==1){
            roundScore += dice1 + dice2;
            $('#current-' + activePlayer).html(roundScore);
        }else {
            nextPlayer();
        }

    }

    
});

$('.btn-hold').click(function(){

    if(gamePlaying){
         scores[activePlayer] += roundScore;
        $('#score-' + activePlayer).html(scores[activePlayer]);      
        var input = $('.final-score').val(); 
        var winnningScore;
        if(input){
            var winnningScore = input;
        }else {
            winnningScore = 100;
        }

        if (scores[activePlayer] >= winnningScore) {
            $('#name-' + activePlayer).html('Winner!');
            $('#dice1').css('display','none');
            $('#dice2').css('display','none');
            $('.player-' + activePlayer + '-panel').addClass('winner');
            $('.player-' + activePlayer + '-panel').removeClass('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
   
    
});

$('.btn-new').click(init);


function init (){
    scores  = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = 2;

    $('.player-score').html('0');
    $('.player-current-score').html('0');
    $('.dice').css("display","none");
    $('#name-0').html('Player 1');
    $('#name-1').html('Player 2');
    $('.player-0-panel').removeClass('winner');
    $('.player-1-panel').removeClass('winner');
    $('.player-0-panel').remove('active');
    $('.player-1-panel').remove('active');
    $('.player-0-panel').add('active');
}



function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0;
    $('.player-current-score').html('0');
    $('.player-0-panel').toggleClass('active');
    $('.player-1-panel').toggleClass('active');
    $('.dice').css("display","none");
}
