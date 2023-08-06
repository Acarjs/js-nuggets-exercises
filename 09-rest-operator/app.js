// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function -important!!!

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear']
const [first, second, ...restOfTheFruits] = fruits //this is array destructuring
console.log(first, second, restOfTheFruits) //apple orange ['lemon', 'banana', 'pear']
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon')
console.log(specificFruit)

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { name, ...rest } = person //this is object destructuring

console.log(name, rest) //john {lastName: 'smith', job: 'developer'}

// functions
const getAverage = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  const average =
    scores.reduce((total, item) => {
      return (total = total + item)
    }, 0) / scores.length

  console.log(average)
}

// getAverage(person.name, 87, 98, 100, 34)
const testScores = [25, 46, 78, 12]
getAverage(person.name, ...testScores)
