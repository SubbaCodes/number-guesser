let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let secretTargetNumber = Math.floor(Math.random() * 10);
  return secretTargetNumber;
};

// console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, secretNum) => {
  if (humanGuess === computerGuess) return true;
  else if (humanGuess - secretNum < computerGuess - secretNum) return true;
  else if (computerGuess === secretNum) return false;
  // else return false
};

const updateScore = winner => {
  if (winner === "human") return (humanScore += 1);
  else if (winner === "computer") return (computerScore += 1);
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};
