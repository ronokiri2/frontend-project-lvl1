import readlineSync from 'readline-sync';
import printName from '../index.js';
import returnRandomNumber from '../utils.js';

const name = printName();

const primeGame = () => {
  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const randomNumber = returnRandomNumber(2, 100);

    const isPrime = () => {
      for (let i = 2; i < randomNumber - 1; i += 1) {
        if (randomNumber % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isPrime()) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime()}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};

export default primeGame;
