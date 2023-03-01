function topSalary(salaries) {
  let topSalaryOwner = null;
  let topSalary = 0;

  for (let [owner, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topSalaryOwner = owner;
    }
  }

  return topSalaryOwner;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries)); // Pete
