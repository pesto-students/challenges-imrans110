function lastIndexOf(itemToBeFound, array) {
  let lastIndex = -1;
  array.forEach((currentItem, index) => {
    if (currentItem === itemToBeFound) {
      lastIndex = index;
    }
  });

  return lastIndex;
}

export { lastIndexOf };
