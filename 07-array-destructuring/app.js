// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

// console.log(fruit1, fruit2, fruit3)

const [john, , bob, , kelly] = friends

// console.log(john, bob, kelly)

let first = 'bob'
let second = 'john'

// let temp = second
// console.log(temp, first, second) // john bob john
// second = first
// console.log(temp, first, second) // john bob bob
// first = temp
// console.log(temp, first, second) // john john bob

;[second, first] = [first, second] //assign second's value to first value, first's value to second's value.

console.log(first, second)
