const { LinkedList } = require("../2 - linked lists/shared/singlyLinkedList")

// animal [cat cat cat > dog]
// enqueue, dequeueAny, dequeueCat, dequeueDog

const case0 = new LinkedList()

case0.append(5)
case0.append(2)
case0.append(4)
case0.append(9)
case0.append(8)
case0.append(2)
case0.append(1)

// cats === even numbers
// dogs === odd numbers

// class AnimalShelter {
//   constructor() {
//     this.animalStack = new LinkedList()
//     this.
//   }

//   _checkIfCat(type) {
//     return type % 2 === 0
//   }

//   enqueue(animal) {
//     this.animalStack.append(animal)
//   }

//   dequeueAny() {
//     this.animalStack.
//   }
// }

case0.print()