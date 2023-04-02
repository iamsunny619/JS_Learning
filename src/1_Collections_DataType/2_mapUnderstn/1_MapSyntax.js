//ways to create Map in Javascript
let map1 = new Map([
  [1, "A"],
  ["xxxx", 3333],
  ["first name", "ankit thapa"],
  ["arrayData", [1, 2, 2, 3, 4, 5, 6]],
  [
    ["first", "last"],
    ["ankit", "thapa"]
  ],
  [
    ["first_1", "last_2"],
    ["anny", "11111"]
  ]
]);
console.log(map1);

/////////////////////////////////////

const map2 = new Map();

map2.set("k1", "new Vale");
map2.set(2, "this is 2");
//const arry = ["first", "last"];
map2.set(["s", "w"], ["yo", "man"]);
console.log(map2.get("s"));
