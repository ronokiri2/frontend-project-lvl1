import play3Rounds from '../index.js';
import returnRandomNumber from '../utils.js';

const instruction = 'What number is missing in the progression?';

const returnQuestionAndCorrectAnswer = () => {
  const randomFirstNumber = returnRandomNumber(0, 10);
  const randomDelta = returnRandomNumber(1, 5);
  const randomQuantityOfNumbers = returnRandomNumber(5, 12);
  const randomPositionOfNumbers = returnRandomNumber(1, randomQuantityOfNumbers);

  let question = `${randomFirstNumber}`;
  let nextNumber = Number(randomFirstNumber);

  for (let i = 0; i < randomQuantityOfNumbers; i += 1) {
    if (i === randomPositionOfNumbers) {
      nextNumber += Number(randomDelta);
      question += ' ..';
    } else {
      nextNumber += Number(randomDelta);
      question += ` ${nextNumber}`;
    }
  }

  let correctAnswer = 'sd';
  nextNumber = Number(randomFirstNumber);
  for (let i = 0; i < randomQuantityOfNumbers; i += 1) {
    if (i !== randomPositionOfNumbers) {
      nextNumber += Number(randomDelta);
    } else {
      nextNumber += Number(randomDelta);
      correctAnswer = String(nextNumber);
    }
  }
  console.log(typeof question);
  console.log(typeof correctAnswer);
  return [question, correctAnswer];
};

const progressionGame = () => {
  play3Rounds(returnQuestionAndCorrectAnswer, instruction);
};

export default progressionGame;
