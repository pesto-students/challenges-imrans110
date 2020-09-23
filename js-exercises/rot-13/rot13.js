/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
function rotateString(string, rotation = 13) {
  const LOWER_BOUND_CHAR_ASCII = 65;
  const UPPER_BOUND_CHAR_ASCII = 90;

  let decodedString = "";

  for (const char of string) {
    const charASCIIValue = char.charCodeAt(0);
    if (
      charASCIIValue >= LOWER_BOUND_CHAR_ASCII &&
      charASCIIValue < UPPER_BOUND_CHAR_ASCII + 1
    ) {
      if (charASCIIValue + rotation > UPPER_BOUND_CHAR_ASCII) {
        const ASCIIValueDifference =
          UPPER_BOUND_CHAR_ASCII - charASCIIValue + 1;
        decodedString += String.fromCharCode(
          rotation - ASCIIValueDifference + LOWER_BOUND_CHAR_ASCII
        );
      } else {
        decodedString += String.fromCharCode(charASCIIValue + rotation);
      }
    } else {
      decodedString += String.fromCharCode(charASCIIValue);
    }
  }
  return decodedString;
}

function rot13(string) {
  return rotateString(string);
}

export { rot13 };
