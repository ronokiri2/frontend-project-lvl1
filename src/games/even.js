import playRounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const randomNumber = returnRandomNumber(1, 100);
  const question = randomNumber;
  let correctAnswer = 'start';

  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const evenGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};

export default evenGame;
