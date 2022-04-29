import playRounds from '../index.js';
import { returnRandomNumber } from '../utils.js';

const instruction = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const randomNumberA = returnRandomNumber(1, 10);
  const randomNumberB = returnRandomNumber(1, 10);
  const symbol = returnRandomNumber(1, 3);

  let question;
  let correctAnswer;
  switch (symbol) {
    case 1:
      question = [randomNumberA, '*', randomNumberB].join(' ');
      correctAnswer = String(randomNumberA * randomNumberB);
      break;
    case 2:
      question = [randomNumberA, '-', randomNumberB].join(' ');
      correctAnswer = String(randomNumberA - randomNumberB);
      break;
    case 3:
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
