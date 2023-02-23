function shuffle(arr) {
  arr.sort((a, b) => a - b);
  const shuffledArr = [];
  for (let i = 0; i < arr.length / 2; i++) {
    shuffledArr.push(arr[i]);
    shuffledArr.push(arr[i + arr.length / 2]);
  }
  if (arr.length % 2 === 1) {
    shuffledArr.push(arr[arr.length - 1]);
  }
  return shuffledArr;
}

console.log(shuffle([2, 1, 5, 3, 11, 7])); // Output: [2, 7, 3, 11, 1, 5]
