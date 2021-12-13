const s1 = 5;
const s2 = 6;
const s3 = 7;
const per = (s1 + s2 + s3) / 2;
const area = Math.sqrt(per * (per - s1) * (per - s2) * (per - s3));
console.log(area.toFixed(2));