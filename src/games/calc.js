import playRounds from '../index.js';
import { returnRandomNumber } from '../utils.js';

const instruction = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const randomNumberA = returnRandomNumber(1, 10);
  const randomNumberB = returnRandomNumber(1, 10);
  const symbols = ['*', '+', '-'];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];

  let question;
  let correctAnswer;
  switch (symbol) {
    case '*':
      question = [randomNumberA, '*', randomNumberB].join(' ');
      correctAnswer = String(randomNumberA * randomNumberB);
      break;
    case '-':
      question = [randomNumberA, '-', randomNumberB].join(' ');
      correctAnswer = String(randomNumberA - randomNumberB);
      break;
    case '+':
      question = [randomNumberA, '+', randomNumberB].join(' ');
      correctAnswer = String(randomNumberA + randomNumberB);
      break;
    default:
      return 'bug in switch cases';
  }
  return [question, correctAnswer];
};

const calcGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};

export default calcGame;
