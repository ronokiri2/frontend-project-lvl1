import readlineSync from 'readline-sync';

const playRounds = (getQuestionAndCorrectAnswer, instruction) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(instruction);
  const rounds = 3;

  for (let correctAnswers = 0; correctAnswers < rounds; correctAnswers += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
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

export default playRounds;
