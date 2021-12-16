const num = Math.floor((Math.random() * 10) + 1);
console.log(num);
const unum = prompt(`Enter a number between 1 and 10`);
if (unum == num) {
  console.log(`Matched`);
} else {
  console.log(`Not matched, the random number is: ${num}`)
}
