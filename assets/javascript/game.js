
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins=0;
var losses=0;
var guessesLeft = 9;
var guessesSoFar=[]



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function nextGuess() 
{
var result = computerChoices[Math.floor(Math.random() * computerChoices.length)]
          console.log("nextGuess", result)
          return result;

}

document.onkeyup = function(event)
{
    var userGuess = event.key
    console.log(userGuess);

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(userGuess);

    if (userGuess === computerGuess) 
        {   
        alert("You Got it!");
        wins++;
        computerGuess = nextGuess();
        }

        else if (userGuess != computerGuess)
        {   
        guessesLeft--;
         }
        
    if (guessesLeft < 1)
        { 
          alert("oh no.... you lost.... I foresee a troubling future");
          guessesLeft=9;
          losses++;
          computerGuess = nextGuess();

        }





    var html =  
            "<h1> The Psychic Game</h1>" +
            "<p>Can you guess my secret letter? Guess the letter for eternal greatness....</p>"+    
            "<p> Wins = " + wins +"</p>"+
            "<p> Losses = " + losses + "</p>"+
            "<p> Guesses Left = " + guessesLeft + "</p>"+
            "<p> Your Guesses So Far: "+ guessesSoFar + "</p>";

            document.querySelector("#main-game").innerHTML = html;

}
