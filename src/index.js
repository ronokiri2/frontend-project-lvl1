import readlineSync from 'readline-sync';
// import { returnQuestionAndCorrectAnswer, instruction } from './games/prime.js';

// нужно оставить цикл в индексе а запускать игру в файле с игрой или бинарке

const play3Rounds = (returnQuestionAndCorrectAnswer, instruction) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(instruction);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const [question, correctAnswer] = returnQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

// play3Rounds();
export default play3Rounds;
// export { printName, play1Round, play3Rounds };
