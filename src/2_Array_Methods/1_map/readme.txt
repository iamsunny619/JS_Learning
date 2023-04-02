
someDataArray.map(function(currentValue,index,array){
  return  """"";
},this)

Parameters: This method accepts two parameters as mentioned above and described below:

function(currentValue, index, arr): It is a required parameter and it runs on each element of the array. It contains three parameters which are listed below:
currentValue: It is a required parameter and it holds the value of the current element.
index: It is an optional parameter and it holds the index of the current element.
arr: It is an optional parameter and it holds the array.
thisValue: It is an optional parameter and is used to hold the value passed to the function.
Return Value: It returns a new array and elements of arrays are the result of the callback function. 



The callback function() is called on each array element, and the map() method
 always passes the current element, the index of the current element, and the whole array object to it.

The "this" argument will be used inside the callback function. By default, its value is undefined