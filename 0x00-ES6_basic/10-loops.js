export default function appendToEachArrayValue(array, appendString) {
  const __array = []
  for (const value of array) {
    var value = array[idx];
    __array.push(appendString + value);
  }

  return __array;
}
