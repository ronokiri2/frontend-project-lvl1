import play3Rounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const returnCorrectAnswer = (a, b) => {
  if (b) {
    return returnCorrectAnswer(b, a % b);
  }
  return Math.abs(a);
};

const returnQuestionAndCorrectAnswer = () => {
  const randomNumberA = returnRandomNumber(2, 100);
  const randomNumberB = returnRandomNumber(2, 100);
  const question = `${randomNumberA} ${randomNumberB}`;
  const correctAnswer = String(returnCorrectAnswer(randomNumberA, randomNumberB));
  return [question, correctAnswer];
};

const gcdGame = () => {
  play3Rounds(returnQuestionAndCorrectAnswer, instruction);
};
export default gcdGame;
