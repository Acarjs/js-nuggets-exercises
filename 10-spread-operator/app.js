// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy'
const letters = [...udemy]
// console.log(letters)

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friends = [...boys, bestFriend, ...girls]
const friends2 = [...boys, bestFriend, ...girls]

// console.log(friends)

//reference
const newFriends = friends //we are setting up the REFERENCE
newFriends[0] = 'nancy' //since newFriends has reference to friends, friends array will also change. if we don't want this behavior we need to use spread operator.
// console.log(friends) //['nancy', 'peter', 'bob', 'arnold', 'susan', 'anna']
// console.log(newFriends) //['nancy', 'peter', 'bob', 'arnold', 'susan', 'anna']

// copy

const newFriends2 = [...friends2] // we are setting up a COPY
newFriends2[0] = 'nancy'
console.log(friends2) //['john', 'peter', 'bob', 'arnold', 'susan', 'anna']
console.log(newFriends2) //['nancy', 'peter', 'bob', 'arnold', 'susan', 'anna']

// ES2018 - ES8

const person = { name: 'john', job: 'developer' }
const newPerson = { ...person, city: 'chicago', name: 'peter' }
console.log(person) //{name: 'john', job: 'developer'}
console.log(newPerson) //{name: 'peter', job: 'developer', city: 'chicago'}
