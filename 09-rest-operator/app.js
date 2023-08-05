// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function -important!!!

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear']
const [first, ...rest] = fruits //this is array destructuring
console.log(first, rest)

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { name } = person //this is object destructuring
console.log(name)
