import readlineSync from 'readline-sync';
import returnRandomNumber from '../utils.js';

const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const randomNumber = returnRandomNumber(1, 100);

    let trueAnswer = 'start';

    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
