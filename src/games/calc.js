import readlineSync from 'readline-sync';
import printName from '../index.js';
import returnRandomNumber from '../utils.js';

const name = printName();

const calcGame = () => {
  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const randomNumberA = returnRandomNumber(1, 10);
    const randomNumberB = returnRandomNumber(1, 10);
    const symbols = ['*', '+', '-'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const correctAnswerString = [randomNumberA, symbol, randomNumberB].join(' ');

    const correctAnswer = () => {
      switch (symbol) {
        case '*':
          return randomNumberA * randomNumberB;
        case '-':
          return randomNumberA - randomNumberB;
        case '+':
          return randomNumberA + randomNumberB;
        default:
          return 'bug in switch cases';
      }
    };

    console.log('What is the result of the expression?');
    console.log(`Question: ${correctAnswerString}`);

    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);

    if (userAnswer === correctAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
