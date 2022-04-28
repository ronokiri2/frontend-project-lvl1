import readlineSync from 'readline-sync';

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

export default play3Rounds;
