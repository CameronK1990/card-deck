
const numAr = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

const suitAr = ["spades", "hearts", "clubs", "diamonds"];


// UI logic
(document).ready(function(){
 ("button#deck").submit(function(event){
    event.preventDefault();
    numAr.forEach(function(number){
      number.concat("of diamonds")
    });
    console.log(numAr);
  });
});
