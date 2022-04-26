import readlineSync from 'readline-sync';
import printName from '../index.js';

const name = printName();

const progressionGame = () => {
  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    let min = 0;
    let max = 10;
    const randomFirstNumber = Math.floor(Math.random() * (max - min) + min);

    min = 1;
    max = 5;
    const randomDelta = Math.floor(Math.random() * (max - min) + min);

    min = 5;
    max = 12;
    const randomQuantityOfNumbers = Math.floor(Math.random() * (max - min) + min);

    min = 1;
    max = randomQuantityOfNumbers;
    const randomPositionOfNumbers = Math.floor(Math.random() * (max - min) + min);

    let question = `${randomFirstNumber}`;
    let nextNumber = Number(randomFirstNumber);

    const returnNumbers = () => {
      for (let i = 0; i < randomQuantityOfNumbers; i += 1) {
        if (i === randomPositionOfNumbers) {
          nextNumber += Number(randomDelta);
          question += ' ..';
        } else {
          nextNumber += Number(randomDelta);
          question += ` ${nextNumber}`;
        }
      }
      return question;
    };

    const returnCorrectAnswer = () => {
      nextNumber = Number(randomFirstNumber);
      for (let i = 0; i < randomQuantityOfNumbers; i += 1) {
        if (i !== randomPositionOfNumbers) {
          nextNumber += Number(randomDelta);
        } else {
          nextNumber += Number(randomDelta);
          const correctAnswer = nextNumber;
          return correctAnswer;
        }
      }
      return 0;
    };

    console.log('What number is missing in the progression?');
    console.log(`Question: ${returnNumbers()}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === returnCorrectAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${returnCorrectAnswer()}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default progressionGame;
