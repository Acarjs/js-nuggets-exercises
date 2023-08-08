const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },
  { name: 'peter', location: { street: '123 Pine street' } },
  {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
  },
]

people.forEach((person) => {
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // )

  //we can also write this like that:
  console.log(person?.location?.timezone?.offset) // +7:00 undefined +9:00
  //We say here that : Hey check for the person if it's there then keep checking for location. If location is there keep checking for timezone. If timezone is there check for the offset.

  //if we don't wanna see undefined, then :
  console.log(person?.location?.timezone?.offset || 'hello') //+7:00 hello +9:00
})
