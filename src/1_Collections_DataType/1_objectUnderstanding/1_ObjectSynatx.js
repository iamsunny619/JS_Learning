//Object in JS is an unorder collection key and values

const ObjectName = {
  key1: "valuessss",
  key2: "key2 values",
  69: "iamsunyy619",
  arrays: [1, 2, 3, 4],
  childObj: {
    keya: "hahahha",
    3: 20,
    2: "fjfjfjfjfjfj",
    funNameKey: function () {
      console.log("inside obejct inside object func is running");
      return ""; // if no return added, javascript will take undefined , cause js all expect a retrun value from function
    }
  }
};

console.log(ObjectName);
console.log(ObjectName.childObj.funNameKey());

//As I mentioned earlier OBJECT in JS is unordered in nature, so as u can see in the cosole open, the printed data is not how we defined in object while codinging, keys are printed out of the serial no's,
