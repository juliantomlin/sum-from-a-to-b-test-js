
function sum(fromN, toN) {
  let number = toN
  if (number <= fromN){
    return toN
  }

  return number + sum(fromN ,(number - 1))
}

module.exports = sum;
