function makeUpperCase(value) {
  console.log(value.toUpperCase())
}
// makeUpperCase('anil')

function reverseString(value) {
  console.log(value.split('').reverse().join(' '))
}

function handleName(name, cb) {
  const fullName = `${name} acar`

  cb(fullName)
}

// handleName('anil', makeUpperCase)
// handleName('anil', reverseString)

handleName('susan', function (value) {
  console.log(value)
})

const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
  console.log('hello world')
})
