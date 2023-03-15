function playGame(){

let firstAnswer = window.prompt('Do you head left or right?') 
if(firstAnswer === 'left') 
{
    let secondAnswer = window.prompt(`As you walk along the pathway, you realize you're famished. Do you eat or ignore it?`);
    if(secondAnswer === 'eat') {
        let thirdAnswer = window.prompt(`Sweet I almost forgot I packed myself a couple of snacks. It's kinda hot today, should I go ahead and eat the cheese or the yogurt?`);
        if(thirdAnswer === 'cheese' || thirdAnswer === 'yogurt'){
            let fourthAnswer = window.alert(`Ugh. You ate the dairy-snack you had sitting open in your pants pocket. During the middle of a hot summer day. AND you're lactose intolerant. Idiot. You die.`)
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
        else if(thirdAnswer === 'both'){
            let fourthAnswer = window.alert(`You're so lactose intolerant that the combination of dairy-snacks consumed at the same time NEUTRALIZED the effects they would normally have had on you. Congratulations. You've avoided certain death and you carry on with your life.`)
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
    }
 else if (secondAnswer === 'ignore it' || secondAnswer === 'ignore') {
        let thirdAnswer = window.prompt(`Meh. I'm not so hungry right now. There's another pathway up ahead though. Should I take the forest or the river?`); 
        if(thirdAnswer === 'forest'){
            let fourthAnswer = window.alert(`The forest is vast and tall. It's nice and cool in here. You realize that you're exhausted and decide to take a long, well-deserved nap. Good for you.`)
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
        else if(thirdAnswer === 'river'){
            let fourthAnswer = window.alert(`The river is cool and flowing gently. You realize you're dehydrated, and a crisp drink from the river is exactly what you needed. You are satisfied. Good for you.`)
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
    } 
        
    
} 
else if(firstAnswer === 'right') 
{
    let secondAnswer = window.prompt(`At the end of the pathway, a ziploc bag filled with an un-identifiable clear liquid sits on the ground. Do you pick it up or leave it?`);
    if(secondAnswer === 'pick it up') {
        let thirdAnswer = window.prompt(`You pick up the ziploc bag. You're not really sure what's in it, but you realize suddenly that you're in the middle of the desert and it's hella hot. Hella hot... So. Do you drink or nah?`);
        if(thirdAnswer === 'nah') {
            let fourthAnswer = window.alert(`You decide not to drink it, and unfortunately you've JUST realized you're in the middle of the desert. By choosing not to drink, you die of dehydration.`);
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
        else if(thirdAnswer === 'drink') {
            let fourthAnswer = window.alert(`You drink. You are teleported to Mars. That's cool as heck, Teletubby. Good for you.`)
            let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
        }
    }
    else if(secondAnswer === 'leave it') {
        let thirdAnswer = window.alert(`You decide to leave the ziploc bag on the ground. Suddenly, you realize you're in the middle of the desert. By choosing not to pick up the mystery liquid filled ziploc bag, you have rid yourself of your one POSSIBLE chance of hydration and you die.`)
        let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
    }
}
else
{
    let secondAnswer = window.alert(`Error.`)
    let playAgain = confirm('Would You Like To Play Again?'); 
            if(playAgain == true) {
                playGame();
            }
} 
    
} 
playGame();