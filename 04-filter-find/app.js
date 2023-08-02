//Filter - returns a new array, can manipulate the size of new array(unlike map), return based on condition
//Find - returns single instance(object), returns first match, if no match - undefined

const people = [
  {
    name: 'anil',
    age: 32,
    position: 'developer',
  },
  {
    name: 'dominika',
    age: 26,
    position: 'hr',
  },
  {
    name: 'teo',
    age: 0,
    position: 'future-developer',
  },
  {
    name: 'funda',
    age: 70,
    position: 'principle',
  },
  {
    name: 'isa',
    age: 68,
    position: 'officer',
  },
]

//filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person
  // }

  return person.age < 30
})

// console.log(youngPeople)

const developers = people.filter(
  (developer) => developer.position === 'developer'
)

// console.log(developers)

const dominika = people.filter((person) => person.name === 'dominika')

console.log(dominika[0].position)
