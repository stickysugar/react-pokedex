/**randomly shuffles array
 * => array
 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/** split array in half
 * => return [[], []
 */
function splitArray(array) {
  const halfWayIndex = array.length / 2;
  return [array.splice(0, halfWayIndex), array];
}

/** takes in aray of numbers retunrs number */
function sumArrayOfNumbers(array) {
  return array.reduce((previous, current) => {
    return previous + current;
  });
}


export { shuffleArray, splitArray, sumArrayOfNumbers };


