//dot notation

const person = {
  name: 'john',
}
// console.log(person.name)
person.age = 25
// console.log(person.age)

//square bracket notation

const items = {
  'featured-items': ['item1', 'item2'],
}

console.log(items['featured-items'])
console.log(person['name'])

let appState = 'loading' //value for our variable is going to be key name.
appState = 'error'

const keyName = 'computer'

const app = {
  [appState]: true, // loading:true
}

app[keyName] = 'macbook'

console.log(app)

const state = {
  loading: true,
  name: '',
  job: '',
}

const updateState = (key, value) => {
  state[key] = value
}

updateState('name', 'anil')
updateState('job', 'developer')
updateState('loading', false)
updateState('age', 32)

console.log(state)
