//reduce

//iterates,callback function

//reduce to a single value - number,array,object

//1st parameter ('acc') - total of all calculations
//2st parameter ('curr')  - current iteration/value

const staff = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
    salary: 100,
  },
  {
    name: 'peter',
    age: 25,
    position: 'designer',
    salary: 300,
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
    salary: 400,
  },
  {
    name: 'bob',
    age: 35,
    position: 'intern',
    salary: 10,
  },
]

const dailyTotal = staff.reduce((total, person) => {
  console.log(total)
  // console.log(person.salary)

  total += person.salary

  return total // always we must return the first value
}, 0) // 0 is initial value

// console.log(dailyTotal)
