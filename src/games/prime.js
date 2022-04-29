import playRounds from '../index.js';
import { returnRandomNumber, isPrime } from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = returnRandomNumber(2, 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

const primeGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};

export default primeGame;
