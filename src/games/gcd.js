import readlineSync from 'readline-sync';
import printName from '../index.js';
import returnRandomNumber from '../utils.js';

const name = printName();
console.log('Find the greatest common divisor of given numbers.');

const gcdGame = () => {
  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const randomNumberA = returnRandomNumber(2, 100);
    const randomNumberB = returnRandomNumber(2, 100);
    const question = `${randomNumberA} ${randomNumberB}`;

    const correctAnswer = (a, b) => {
      if (b) {
        return correctAnswer(b, a % b);
      }
      return Math.abs(a);
    };

    console.log(`Question: ${question}`);

    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);

    if (userAnswer === correctAnswer(randomNumberA, randomNumberB)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNumberA, randomNumberB)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gcdGame;
