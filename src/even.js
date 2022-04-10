import readlineSync from 'readline-sync';

const returnRandom = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * maxNumber);
    let trueAnswer = 'start';

    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log('no!');
      correctAnswers = -1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default returnRandom;
