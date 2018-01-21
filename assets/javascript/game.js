 var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = "";

//problem: computer shouldn't make new choice until after guesses are at 10
//is there a for or while loop we could use here?
document.onkeyup = function(event) {
       var userGuess = event.key;
       console.log(userGuess);
       var alphabet = "abcdefghijklmnopqrstuvwxyz";
       var compChoiceIndex = Math.floor((Math.random() * 26));
       var compChoice = alphabet.charAt(compChoiceIndex);
      
       

console.log(compChoice);

       if (userGuess == compChoice)
       {
        wins++;
        guesses=10;
       }
       else
       {
        guesses--;
        // var guessedLetter = userGuess;
        // var guessedList = lettersGuessed.concat(guessedLetter); 
        // document.getElementById("lettersGuessed").textContent = guessedList;
       }

       if (guesses == 0)
       {
        guesses = 10;
        losses++;
       }

console.log("Wins:" + wins);
console.log("Losses:" + losses)
console.log("Guesses:" + guesses);
console.log("Letters guessed:" + lettersGuessed)
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guesses").textContent = guesses;

      };
    

