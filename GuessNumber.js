let gameValue = 18;
let chances = 3;

while (chances > 0) {
  let userEntry = prompt("Guess the Value:");

  if (parseInt(userEntry) === gameValue) {
    console.log("Correct!");
    break;
  } else {
    chances--;
    if (chances > 0) {
      console.log(`Incorrect! You have ${chances} ${chances === 1 ? 'chance' : 'chances'} left. Guess again.`);
    } else {
      console.log("Chances are over. The correct value was " + gameValue);
    }
  }
}
