import play3Rounds from '../index.js';
import returnRandomNumber from '../utils.js';

// const name = printName();

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const returnQuestionAndCorrectAnswer = () => {
  const question = returnRandomNumber(2, 100);
  let correctAnswer;
  console.log(question);

  for (let i = 2; i < question - 1; i += 1) {
    console.log(i);
    if (question % i === 0) {
      console.log('correct answer is NO');
      correctAnswer = 'no';
      return [question, correctAnswer];
    }
  }
  console.log('correct answer is yes');
  correctAnswer = 'yes';
  return [question, correctAnswer];
};
// const randomNumber = () => {
//   const rr = returnRandomNumber(2, 100);
//   console.log(rr);
//   return rr;
// };
// const primeGame = () => {
//   play3Rounds(returnQuestionAndCorrectAnswer(), name);
// };
const primeGame = () => {
  play3Rounds(returnQuestionAndCorrectAnswer, instruction);
};

export default primeGame;
