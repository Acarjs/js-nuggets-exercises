// Javascript Nuggets - Promises

// Promise : In JavaScript, promise is an object that returns a value. Imagine, you are in the restaurant and you ordered only one milkshake and once you're done with your payment most likely you don't get the item right away, instead you get a receipt which is a promise by the restaurant that once the item is ready, you'll get it. A couple of minutes later, once the item is ready you show the receipt and you get the milkshake. It's also possible that you might be rejected. For example, they realised that they have no more ice-cream. So, receipt is a PROMISE that you will get the item eventually or if they cannot provide it they have to reject it. In JavaScript, using PROMISES is going to be http request. You set up the request and you don't get the response right away because it is an asynchronous operation. Only once server responds, you either get the data that you're looking for you get an error - maybe the url is wrong-.

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2

//resolve and reject are functions
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)

  if (random === value) {
    resolve('bingo')
  } else {
    reject('wrong number')
  }
})

// console.log(promise)

// you can call the parameter(data) whatever you want
promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
