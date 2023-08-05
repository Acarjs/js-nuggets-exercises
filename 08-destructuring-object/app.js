// faster/easier way to access/unpack values from arrays

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

const first = 'some value'

const {
  first: john,
  last,
  city,
  siblings: { sister: favoriteSibling }, //for the object we need to specify what property we want to destruct
} = bob

console.log(first, john, last, city, favoriteSibling)

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

const person = ({ first, last, city, siblings: { sister } }) => {
  console.log(first, last, city, sister)
}

person(bob)
