import readlineSync from 'readline-sync';
import printName from '../index.js';

const name = printName();

const primeGame = () => {
  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const min = 2;
    const max = 100;
    const random = Math.floor(Math.random() * (max - min) + min);

    const isPrime = () => {
      for (let i = 2; i < random - 1; i += 1) {
        if (random % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    console.log(`Question: ${random}`);
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
