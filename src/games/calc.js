import play3Rounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'What is the result of the expression?';
const returnQuestionAndCorrectAnswer = () => {
  const randomNumberA = returnRandomNumber(1, 10);
  const randomNumberB = returnRandomNumber(1, 10);
  const symbols = ['*', '+', '-'];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const question = [randomNumberA, symbol, randomNumberB].join(' ');

  let correctAnswer;
  switch (symbol) {
    case '*':
      correctAnswer = String(randomNumberA * randomNumberB);
      break;
    case '-':
      correctAnswer = String(randomNumberA - randomNumberB);
      break;
    case '+':
      correctAnswer = String(randomNumberA + randomNumberB);
      break;
    default:
      return 'bug in switch cases';
  }
  return [question, correctAnswer];
};

const calcGame = () => {
  play3Rounds(returnQuestionAndCorrectAnswer, instruction);
};

export default calcGame;
