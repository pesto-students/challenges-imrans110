/* eslint-disable comma-dangle */
function diffArray(firstArray, secondArray) {
  const concatinatedArray = [...firstArray, ...secondArray];
  return concatinatedArray.filter(
    (item) => !(firstArray.includes(item) && secondArray.includes(item))
  );
}

export { diffArray };
