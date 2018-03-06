$ (document).ready(readyNow)

function readyNow() {
  $( '#button1').on('click', display);
}
const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

class Employee { // establishes Employee class
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber
    this.annualSalary = parseInt(annualSalary)
    this.reviewRating = reviewRating
    this.bonusPerc = 0
    this.totalBonus = 0
    this.totalCompensation = 0
  }
}
let employeeArr = []; // establish empty bonus array for new Class

function updateEmployeeArr() { // creates new Class objects from existing array, pushes to new array, adds bonus
  employees.forEach(function(emp){
    let updatedEmp = new Employee(emp.name, emp.employeeNumber, emp.annualSalary, emp.reviewRating);
    calcBonusPer(updatedEmp);
    bonusCheck(updatedEmp);
    adjustCompensation(updatedEmp);
    employeeArr.push(updatedEmp);
    console.log(updatedEmp);

  });
}
updateEmployeeArr();
console.log(employeeArr);

function calcBonusPer(empx) { // establish base bonus $ based on rating
  switch (empx.reviewRating){
    case 5:
     empx.bonusPerc =  .1;
    break;
    case 4:
     empx.bonusPerc = .06;
    break;
    case 3: //
    empx.bonusPerc = .04;
    break;

  }
}

function bonusCheck(empx){ // checking for bonus adjustments based on shit
  if (empx.employeeNumber.length == 4){
    empx.bonusPerc = empx.bonusPerc +.05;
  }
  if (empx.annualSalary > 65000){
    empx.bonusPerc = empx.bonusPerc - .01;
  }
  if ( empx.bonusPerc > .13){
    empx.bonusPerc = .13;
  }
  if (empx.bonusPerc < 0){
    empx.bonusPerc =0;
  }
}

function adjustCompensation(empx){ // calculate total compensation amount
  empx.totalBonus = empx.annualSalary * empx.bonusPerc;
  empx.totalCompensation = empx.annualSalary + empx.totalBonus;
}

function display() {
  let outputElement = $( '#output');
  console.log('in display');
  for(let employee of employeeArr){
    outputElement.append('<li> name: ' +employee.name + '</li>');
    outputElement.append('<li> number: '+ employee.employeeNumber + '</li>');
    outputElement.append('<li> annual salary: $'+ employee.annualSalary + '</li>');
    outputElement.append('<li> bonus percentage: '+ employee.bonusPerc + '</li>');
    outputElement.append('<li> total bonus: $'+ employee.totalBonus + '</li>');
    outputElement.append('<li> total compensation: $'+employee.totalCompensation+ '</li></br>');
  }
}
