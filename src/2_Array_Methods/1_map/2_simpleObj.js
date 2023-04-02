let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" }
];

let fullName = users.map((curr, index, arr) => {
  return curr.firstName + " " + curr.lastName;
});

console.log(fullName); // ["Susan Steward", "Daniel Longbottom, "Jacob Black"]

// lets calculte total salry given to each employe, as total sum, and then the net aount to each employe after add and subtract.

const employees = [
  { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
  { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
  { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
  { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 }
];

// to get total for all employees
let total = 0;
const data = employees.map((curr) => {
  return (total = total + curr.salary);
});
console.log(total); //19000

// to get gross salry for each

const grossEmployee1 = employees.map((curr) => {
  const { name, salary, bonus, tax } = curr;
  const sal = salary + bonus - tax;
  return { name, sal };
});
// better approch is ,

const grossEmployee2 = employees.map((curr) => {
  return {
    name: curr.name,
    gross: curr.salary + curr.bonus - curr.tax
  };
});

console.log(grossEmployee2); //{name: "Adam", gross: 4500} {name: "Noah", gross: 7000} ...
