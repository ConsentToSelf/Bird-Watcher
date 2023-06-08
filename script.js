const birdsPerDay = [
  4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3,
];

function birdsInWeek(birdsPerDay, week) {
  let temp = 0;
  let counter = (week - 1) * 7;
  if (week === 0 || week === 1) counter = 0;
  for (let i = counter; i < week * 7; i++) {
    temp += birdsPerDay[i];
  }
  return temp;
}
console.log(birdsInWeek(birdsPerDay, 2));
// function totalBirdCount(birdsPerDay) {
//   let temp = 0;
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     temp += birdsPerDay[i];
//   }
//   return temp;
// }

// console.log(totalBirdCount(birdsPerDay));
