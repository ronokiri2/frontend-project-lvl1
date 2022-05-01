import playRounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  for (let i = 2; i < question - 1; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndCorrectAnswer = () => {
  const question = returnRandomNumber(2, 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

const primeGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};

export default primeGame;
