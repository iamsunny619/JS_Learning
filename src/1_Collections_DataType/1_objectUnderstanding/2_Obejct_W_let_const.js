// here we will work with let and const for object to see the differnce of each with object.
/*
In js let and const are used to declare varibale, but they have =some diff ion how they behave
and how they can be used in JS..

when using let u can declare a variable that can be reassgined later with new value
For example:::
*/

let x = 10;
console.log(x); //10
x = "sunny";
console.log(x); //sunny // since we used let

/*
On the other FileSystemDirectoryHandle, when using "const" u decalre a var  that cannot be reassgined a new value.
now the variable is considered immutable , meaning its value cant be change once intilized
For example::
*/

const y = 10;
console.log(x); //10
y = "sunny"; // it will throw an error, as y is const i.e immutable.

/*
Now will work with object to understand the difference of each declartion on object


for example, of let with object
*/

let obj = { a: 1 };
console.log(obj); //30
obj.a = "30";
//notice above console will print value of a as sting 20, thought the code was change/updated later the line of console, beacuse object is refernced type.
// re-assgining a value to object
obj = {
  b: 666
};
// above assignment will overwrite the previous stored value i.e a
console.log(obj); // b:666

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myObj = { x: 2222 };
console.log(myObj);
myObj.x = "sunnny";
// above change is allowed , beacuse we are change the properties vlaue only
//now let check again with this way..

myObj = {
  y: "dkvjbdfiv"
}; //type erro , myObj is read only error will come, this is not allowed.

//NOTE:- let allow declartion and can have emtpy variable
//while const only go with defination, value shld be provided with declaring.
