birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  return temp;
}

console.log(totalBirdCount(birdsPerDay));
