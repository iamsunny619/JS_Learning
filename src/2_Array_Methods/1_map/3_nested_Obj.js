const employees = [
  {
    name: "Adam",
    salary: 5000,
    bonus: 500,
    tax: 1000,
    obj: {
      id: 1,
      ss: "ssss"
    }
  },
  {
    name: "Noah",
    salary: 8000,
    bonus: 1500,
    tax: 2500,
    obj: {
      id: 1,
      ss: "ssss"
    }
  },
  {
    name: "Fabiano",
    salary: 1500,
    bonus: 500,
    tax: 200,
    obj: {
      id: 1,
      ss: "ssss"
    }
  },
  {
    name: "Alireza",
    salary: 4500,
    bonus: 1000,
    tax: 900,
    obj: {
      id: 1,
      ss: "ssss"
    }
  }
];

// one way of accessing/itrating

const data = employees.map(({ name, salary, bonus, tax, obj: { id } }) => {
  return {
    name: name,
    salary: salary,
    bonus: bonus,
    tax: tax,
    obj: {
      id: id
    }
  };
});

console.log(employees);

console.log(data);

//////////////////////////////////////////////////////////////////
//beter way for above expression
const d = employees.map((curr) => {
  return {
    name: curr.name,
    salary: curr.salary,
    bonus: curr.bonus,
    tax: curr.tax,
    obj: curr.obj,
    obj1: curr.obj.id
  };
});
console.log(d);
