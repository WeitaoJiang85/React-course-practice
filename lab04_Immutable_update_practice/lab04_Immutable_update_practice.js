const myArray = ['I', 'would', 'like', 'to', 'say']
// 1. Add 'hello' to the end of the array
const myArray1 = [...myArray, 'hello']
console.log(myArray1)
// 2. Replace the first element in the array with 'Fred'
const myArray2 = ['Fred', ...myArray.slice(1)]
console.log(myArray2)
// 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.
const myArray3 = [
  ...myArray.slice(0, 3),
  'you',
  ...myArray.slice(-2),
  'goodbye',
]
console.log(myArray3)
// 4. Remove 'like' and 'to' from the array (by index)
const myArray4 = [...myArray.slice(0, 2), ...myArray.slice(4)]
console.log(myArray4)
// 5. Sort the array
const myArray5 = [...myArray.sort()]
console.log(myArray5)

const myObject = {
  name: 'Fred Blogs',
  age: 35,
}

// 1. Change Fred's name to `Fred Smith`
const myObject1 = { ...myObject, name: 'Fred Smith' }
console.log(myObject1)
// 2. Add a new key {nationality: 'AU'}
const myObject2 = { ...myObject, nationality: 'AU' }
console.log(myObject2)
// 3. Add 1 to Fred's age
const myObject3 = {
  ...myObject,
  age: myObject.age + 1,
}
console.log(myObject3)

const pets = [
  { name: 'Fluffy', type: 'cat', adopted: false },
  { name: 'Mittens', type: 'cat', adopted: true },
  { name: 'Rover', type: 'dog', adopted: false },
]

// 1. Add a new pet to the end of the list: { name: 'Shadow', type: 'dog', adopted: false }
const newPet = { name: 'Shadow', type: 'dog', adopted: false }
let pets1 = pets.map((pet) => ({ ...pet }))
pets1 = [...pets1, { ...newPet }]
console.log(pets1)
// 2. Change Rovers's status to adopted: true
const pets2 = pets.map((pet) => {
  if (pet.name === 'Rover') {
    return { ...pet, adopted: true }
  }
  return pet
})

console.log(pets2)

const todos = {
  inProgress: ['clean the bathroom'],
  completed: ['wash the dishes', 'react homework'],
}

// 3. Remove all the completed todos
const todos1 = { ...todos, completed: [] }
console.log(todos1)
// 4. Add a new todo to the inProgress list
const todos2 = { ...todos, inProgress: [...todos1.inProgress, 'Go to the Gym'] }
console.log(todos2)
// 5. Move all the inProgress todos to the completed list
const todos3 = {
  inProgress: [],
  completed: [...todos.completed, ...todos.inProgress],
}
console.log(todos3)
