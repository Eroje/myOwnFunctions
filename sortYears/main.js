const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

// Using Sort Method:

const sortYears = arr => arr.sort((x, y) => y - x);

/*
// Using a function declaration AND using a named function:

function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

console.log(sortYears(years))