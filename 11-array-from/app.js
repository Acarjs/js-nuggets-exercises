// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const udemy = 'udemy'

// console.log(Array.from(udemy))

const text = document.querySelectorAll('.text') //array methods doesn't work on nodelist
// console.log(text)

const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText)

// -------------------------------------------------------------------------------------

// the value of `v` below will be `undefined`
const items = Array.from({ length: 120 }, (v, index) => {
  return index
})

const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)

console.log(pages)

const newItems = Array.from({ length: pages }, (v, index) => {
  const start = index * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)

  console.log(start)
  console.log(tempItems)

  return tempItems
})

console.log(newItems)
