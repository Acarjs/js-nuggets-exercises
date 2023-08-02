//unique values

const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
]

const categories = ['all', ...new Set(menu.map((item) => item.category))]

console.log(categories)

const category = document.getElementById('category')

// const list = categories.map((result) => {
//   return `<h2>${result}</h2>`
// })

// category.innerHTML = list.join('')

category.innerHTML = categories
  .map((result) => {
    return `<h2>${result}</h2>`
  })
  .join('')
