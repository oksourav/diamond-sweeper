export function getRowNumber(cellNo, noOfrow) {
    return Math.floor(cellNo / noOfrow);
}

export function closestValue(array, value) {
    var result, lastDelta;
    array.some(item => {
      var delta = Math.abs(value - item);
      if (delta > lastDelta) {
        return true;
      }
      result = item;
      lastDelta = delta;
    });
    return result;
}