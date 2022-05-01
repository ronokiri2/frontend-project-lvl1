import playRounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const returnGCD = (a, b) => {
  if (b) {
    return returnGCD(b, a % b);
  }
  return Math.abs(a);
};

const getQuestionAndCorrectAnswer = () => {
  const randomNumberA = returnRandomNumber(2, 100);
  const randomNumberB = returnRandomNumber(2, 100);
  const question = `${randomNumberA} ${randomNumberB}`;
  const correctAnswer = String(returnGCD(randomNumberA, randomNumberB));
  return [question, correctAnswer];
};

const gcdGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};
export default gcdGame;
