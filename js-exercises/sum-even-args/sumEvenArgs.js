/* eslint-disable comma-dangle */
const sumEvenArgs = (...args) => {
  const argumentsArray = [...args];

  const sum = argumentsArray.reduce(
    (acc, cur) => (cur % 2 === 0 ? acc + cur : acc),
    0
  );

  return sum;
};

export { sumEvenArgs };
