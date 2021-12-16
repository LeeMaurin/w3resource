const today = new Date();
const christmasDay = new Date(today.getFullYear(), 11, 25);
// console.log(christmasDay)

const oneDay = 1000*60*60*24;

console.log(`${Math.ceil((christmasDay.getTime() - today.getTime()) / (oneDay))} days left to christmas.`);
