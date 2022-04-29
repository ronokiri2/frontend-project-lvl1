const returnRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const returnGCD = (a, b) => {
  if (b) {
    return returnGCD(b, a % b);
  }
  return Math.abs(a);
};

const isPrime = (question) => {
  for (let i = 2; i < question - 1; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getProgression = (firstNumber, delta, quantityOfNumbers, positionOfNumbers) => {
  let correctAnswer;
  let question = `${firstNumber}`;
  let nextNumber = Number(firstNumber);

  for (let i = 0; i < quantityOfNumbers; i += 1) {
    if (i === positionOfNumbers) {
      nextNumber += Number(delta);
      question += ' ..';
      correctAnswer = String(nextNumber);
    } else {
      nextNumber += Number(delta);
      question += ` ${nextNumber}`;
    }
  }
  return [question, correctAnswer];
};

export {
  returnRandomNumber, returnGCD, isPrime, getProgression,
};
