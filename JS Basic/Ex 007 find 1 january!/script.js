console.log("--------------------");
for (let year = 2014; year <= 2050; year++) {
  const d = new Date(year, 0, 1);
  // console.log(year);
  if ( d.getDay() === 0 ) 
    console.log(`1st January is a Sunday in the year ${year}`);
}

console.log("--------------------");
