import play3Rounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const returnQuestionAndCorrectAnswer = () => {
  const question = returnRandomNumber(2, 100);
  let correctAnswer;

  for (let i = 2; i < question - 1; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      return [question, correctAnswer];
    }
  }
  correctAnswer = 'yes';
  return [question, correctAnswer];
};

const primeGame = () => {
  play3Rounds(returnQuestionAndCorrectAnswer, instruction);
};

export default primeGame;
