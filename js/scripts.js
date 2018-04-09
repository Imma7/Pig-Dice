// Business Logic
var player1 = "";
var player2 = "";

var randomNum = function() {
    return Math.floor(6*Math.random())+1;
}

function Player(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = 0;
    this.playerName;
}

// Checking for 1
Player.prototype.rollOne = function() {
    if (this.roll === 1) {
        this.tempscore = 0;
        alert("Sorry" + this.playerName + " you got a 1. Your turn is over!")
        // change turn
    } else {
        this.tempscore += this.roll;
    }
}


// User Interface Logic
$(document).ready(function(){
    $("button#start").click(function(event) {
      player1 = new Player(true);
      player2 = new Player(false);

      $(".inputform").hide();

      var player1Name = $(".player1Name").val();
      ("#player1Name").text(player1Name);

      var player2Name = $(".player2Name").val();
      ("#player2Name").text(player2Name);

      player1.playerName = player1Name;
      player2.playerName = player2Name;
    });

    $("button#newGame").click(function(event) {
        $(".players").hide();
        clearValues();
        player1.newGame();
        player2.newGame();
        $("#rollDie1").empty();
        $("#score1").empty();
        $("#total1").empty();
        $("#rollDie2").empty();
        $("#score2").empty();
        $("#total2").empty();

        $(".inputform").show();
    });


    $("button#p1Roll").click(function(event) {
        p1.roll = randomNum();
        $("#rollDie1").text(p1.roll);
        p1.rollOne();
        $("#score1").text(player1.tempscore);

    });

    
});
