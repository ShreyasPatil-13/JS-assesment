const company = {
  name: "Goooogle",
  location: "Pune",
  developmentTeam: {
    managers: [
      { empId: 20, name: "Kevin", age: 35, salary: 60000 },
      { empId: 23, name: "Stuart", age: 35, salary: 60000 },
      { empId: 26, name: "Bob", age: 35, salary: 60000 },
    ],
    employees: [
      { empId: 101, name: "rahul", age: 23, salary: 23000 },
      { empId: 102, name: "ajay", age: 24, salary: 25000 },
      { empId: 103, name: "yash", age: 26, salary: 27000 },
      { empId: 104, name: "kiran", age: 23, salary: 23000 },
      { empId: 105, name: "john", age: 25, salary: 25000 },
    ],
  },
};

console.log(company.name);
console.log(company.developmentTeam);
