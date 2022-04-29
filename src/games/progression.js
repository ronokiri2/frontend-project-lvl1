import playRounds from '../index.js';
import { returnRandomNumber, getProgression } from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = returnRandomNumber(0, 10);
  const delta = returnRandomNumber(1, 5);
  const quantityOfNumbers = returnRandomNumber(5, 12);
  const positionOfNumbers = returnRandomNumber(1, quantityOfNumbers);

  const question = getProgression(firstNumber, delta, quantityOfNumbers, positionOfNumbers)[0];
  const correctAnswer = getProgression(firstNumber, delta, quantityOfNumbers, positionOfNumbers)[1];

  return [question, correctAnswer];
};

const progressionGame = () => {
  playRounds(getQuestionAndCorrectAnswer, instruction);
};

export default progressionGame;
