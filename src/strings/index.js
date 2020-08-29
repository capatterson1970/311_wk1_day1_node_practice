const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairsArr = [];

  for(let i = 0; i < str.length; i += 2) {
    pairsArr.push(str.slice(i, i + 2));
  }

  return pairsArr;
}

const reverse = (str) => {
  // write code for strings.reverse
  let strArr = str.split('');
  let strArrRev = strArr.reverse();
  let strJoin = strArrRev.join('');

  return strJoin;
}

module.exports = {
  split,
  pairs,
  reverse
}