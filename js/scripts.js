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
    this.turn = turn;
    this.playerName;
}

// Checking for 1
Player.prototype.rollOne = function() {
    if (this.roll === 1) {
        this.tempscore = 0;
        alert("Sorry" + this.playerName + "  you got a 1. Your turn is over!")

    } else {
        this.tempscore += this.roll;
    }
}

// Hold
Player.prototype.hold =  function () { 
    this.totalscore += this.tempscore;
        this.tempscore = 0;
        // changeturn
    alert(this.playerName + ",  your round is over. Pass it to the next Player!");
}

Player.prototype.checkWinner = function() {
    if (this.totalscore >= 100) {
        alert(this.playerName + "You are the winner!");
    }
}

Player.prototype.newGame = function() {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName = "";
}

var clearValues=function(){
    $(".player1Name").val("")
    $(".player2name").val("")
}


// User Interface Logic
$(document).ready(function(){
    $("button#start").click(function(event) {
      player1 = new Player(true);
      player2 = new Player(false);

      $(".inputform").hide();

      var player1Name = $(".player1Name").val();
      $("#player1Name").text(player1Name);

      var player2Name = $(".player2Name").val();
      $("#player2Name").text(player2Name);

      player1.playerName = player1Name;
      player2.playerName = player2Name;
    });

    

     $("button#newGame").click(function(event) {
        $(".players").hide();
        clearValues();
        // $("input#player1").val("");
        // $("input#player2").val("");
        // player1Name.newGame();
        // player1Name.player1Name();
        // player2Name.player2Name();
        // player2Name.newGame();
        $("#rollDie1").empty();
        $("#score1").empty();
        $("#total1").empty();
        $("#rollDie2").empty();
        $("#score2").empty();
        $("#total2").empty();

        $(".inputform").show();
    });

    // Roll
    $("button#p1Roll").click(function(event) {
        player1.roll=
         randomNum();
        $("#rollDie1").text(player1.roll);
        player1.rollOne();
        $("#score1").text(player1.tempscore);
    });

    $("button#p2Roll").click(function(event) {
        player2.roll = randomNum();
        $("#rollDie2").text(player2.roll);
        player2.rollOne();
        $("#score2").text(player2.tempscore);   
    });
    
    // Hold
    $("button#p1Hold").click(function(event) {
        player1.hold();
        $("total1").text(player1.totalscore)
        $("#score1").empty();
        $("rollDie1").empty();
        player1.checkWinner();
    });

    $("button#p2Hold").click(function(event) {
        player2.hold();
        $("total2").text(player2.totalscore)
        $("#score2").empty();
        $("#rollDie2").empty();
        player2.checkWinner();
    });
 
});
