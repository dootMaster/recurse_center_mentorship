const { StackArray } = require('./shared/Arr_stack')
// sort stack

// [] x <
// [1224589] x >

const case0 = new StackArray()

case0.push(5)
case0.push(2)
case0.push(4)
case0.push(9)
case0.push(8)
case0.push(2)
case0.push(1)

const sortStack = stack => {
  const helperStack = new StackArray()

  while (!stack.isEmpty()) {
    compare = stack.pop()
    if (stack.peek() < compare) {
      helperStack.push(compare)
      compare = stack.pop()
      while (helperStack.peek() > compare) {
        stack.push(helperStack.pop())
      }
    }
    helperStack.push(compare)
  }

  return helperStack
}

sortStack(case0).print()
//  [98]
//  5
//  [1224]