var input = require('./input');
module.exports = {};

// Passed in as 2x3x4 ( l * w * h)

// function calculateArea
// Calculates area
// @parms (length, width, height )
var calculateArea = (dim) => {
  return 2*dim.l*dim.w + 2*dim.w*dim.h + 2*dim.h*dim.l;
}

var smallestSide = (dim) => {
  return ([ dim.l*dim.w, dim.w*dim.h, dim.h*dim.l].sort((a, b )=>a>b)[0]);
}

// Passed in as 2x3x4 ( l * w * h)
var parseobject = (s) => {
  let arr = s.split("x");
  return  typeof arr[1] != "undefined" ? {"l": +arr[0], "w": +arr[1], "h": +arr[2]} : null;
}

// Finds the shortest two lengths, and uses those to calculate the wrapping ribbon
// Other parameter does not that require such precision
var calculateRibbon = (dim) => {
  let [smallestX, smallestY] = [dim.w, dim.h, dim.l].sort((a,b) => a<b).slice(1)
  return (smallestX*2 + smallestY*2) + (dim.w*dim.h*dim.l);
}

(() => {
   var [sum, ribbonSum] = [0, 0];
   let stringInput = input.split('\n');
   console.log(stringInput.length)
   stringInput.forEach((val)=> {
    var dim = parseobject(val)
    if (dim) {
      // Part 1
      console.log(dim)
      console.log(calculateArea(dim) + smallestSide(dim));
      sum = sum +  (calculateArea(dim) + smallestSide(dim));

      // Part 2
      console.log(calculateRibbon(dim));
      ribbonSum = ribbonSum + calculateRibbon(dim);
    }
  })

   console.log("Wrapping paper: ", sum);
   console.log("Ribbon: ", ribbonSum);
})();