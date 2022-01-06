const uniqueInOrder = function (iterable) {
  let uniqueOrderArray = [];

  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      uniqueOrderArray.push(iterable[i]);
      continue;
    }

    if (iterable[i] === uniqueOrderArray[uniqueOrderArray.length - 1] && i > 0)
      continue;

    uniqueOrderArray.push(iterable[i]);
  }
  return uniqueOrderArray;
};

const uniqueInOrder2 = function (iterable) {
  const arrayOfIter = Array.from(iterable);
  return arrayOfIter.filter(
    (element, index, array) => element !== array[index - 1]
  );
};

const uniqueInOrder3 = function (iterable) {
  return Array.from(iterable).filter(
    (element, index, array) => element !== array[index - 1]
  );
};
