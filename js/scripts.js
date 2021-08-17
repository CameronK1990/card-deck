
// UI logic
$(document).ready(function(){
 $("#card").submit(function(event){
    event.preventDefault();
    const numAr = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    const suitAr = ["spades", "hearts", "clubs", "diamonds"];
    let deckAr = [];
    suitAr.forEach(function(suit){
      numAr.forEach(function(number){
        deckAr.push(number + " of " + suit)
      });
    });
    deckAr.forEach(function(card) {
      $("ul#cardList").prepend("<li>"+ card + "</li>")
    });
  });
});

