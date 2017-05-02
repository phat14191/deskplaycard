$(document).ready(function(){
  $("#cards").submit(function(event){
    event.preventDefault();
    var numSuit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var suit = ["Culbs", "Diamonds", "Spades", "Hearts"];

    numSuit.forEach(function(x){
      var card1 = x + " " + suit[0];
      $("ul#card1").append("<li>" + card1);

      var card2 = x + " " + suit[1];
      $("ul#card2").append("<li>" + card2);

      var card3 = x + " " + suit[2];
      $("ul#card3").append("<li>" + card3);

      var card4 = x + " " + suit[3];
      $("ul#card4").append("<li>" + card4);


    })
    });
  });
