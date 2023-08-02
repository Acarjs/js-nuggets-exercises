//MAP method
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
    position: 'baby',
  },
]

//always map function returns a new array
//does not change the size of original array (unlike filter)
//uses values from original array when making new one

const getAges = (person) => person.age * 2

const ages = people.map(getAges)

// console.log(ages)

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age,
  }
})

console.log(newPeople[0].firstName)

const names = people.map((person) => `<h1>${person.name}</h1>`)
const result = document.querySelector('#result')

result.innerHTML = names.join('')
