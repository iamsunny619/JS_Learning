var arr = [1, 2, 3, 4, 4, 5, 56, 6, 7, 10];

var newArr = arr;
arr.shift(); // it will delete first array element that is 1
console.log(newArr); //[2, 3, 4, 4, 5, 56, 6, 7, 10]

// notice above out for newArr had no "1", which means it is refernce not copied.

var arr = [1, 2, 3, 4, 4, 5, 56, 6, 7, 10];

var newArr = arr.map(function (currentValue, index, arrayData) {
  return currentValue;
});
arr.shift();
arr[3] = 3333;
console.log(arr); //[2, 3, 4, 3333, 5, 56, 6, 7, 10]
console.log(newArr); // [1, 2, 3, 4, 4, 5, 56, 6, 7, 10]

//noticed, though old arr values chaged, but no affect in new copied one, that is whole
// new array was created in DB instead of refernced to the location of data, unlike previous above example

var a = "sunny";
// Since a is string, so we cant map through, hence we will use Array protype method to do so.
//also we could have used
//var b = a.split('');  // would gave same OP.
var b = Array.prototype.map.call(a, function (curr, index, arr) {
  return curr;
});
console.log(b); // ["s", "u", "n", "n", "y"]

//as we could see b has 5 vaalues as in single indexes.
