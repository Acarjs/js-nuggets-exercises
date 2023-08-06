// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy'

// console.log(Array.from(udemy))

const text = document.querySelectorAll('.text') //array methods doesn't work on nodelist
console.log(text)

const newText = Array.from(text).find((item) => item.textContent === 'person')
console.log(newText)
