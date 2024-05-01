const { DirectedGraph, GraphNode } = require('./shared/graph')


class GraphWithMethods extends DirectedGraph {
  routeExists_BFS(node1, node2) {
    const queue = [...node1.edgeList]
    while(queue.length) {
      if (queue[0] === node2) {
        return true
      }
      queue.concat(queue[0].edgeList)
      queue.shift()
    }
    return false
  }

  routeExists_DFS(node1, node2) {
    const stack = [...node1.edgeList]
    while(stack.length) {
      if (stack[stack.length - 1] === node2) {
        return true
      }
      const currentEdgeList = stack.pop().edgeList
      stack.concat(currentEdgeList)
    }
    return false
  }
}

const graph1 = new GraphWithMethods();
graph1.add('A', null);
graph1.add('B', graph1.origin);
graph1.add('C', graph1.origin);
graph1.add('D', graph1.origin.edgeList[0]);
graph1.add('E', graph1.origin);
graph1.add('F', graph1.origin.edgeList[1])
graph1.createCycle(graph1.origin)


/*
   < A _ E
    / \
   B   C _ F
        \
         D

*/

const graph2 = new GraphWithMethods();
graph2.add('A', null);
graph2.add('B', graph2.origin);
graph2.add('C', graph2.origin);
graph2.add('D', graph2.origin.edgeList[0]);
graph2.add('E', graph2.origin.edgeList[0]);

/*
     A
    / \
   B   C
   |
   D
  / \
 E

*/

const graph3 = new GraphWithMethods();
graph3.add('A', null);
graph3.add('B', graph3.origin);
graph3.add('C', graph3.origin);
graph3.add('D', graph3.origin.edgeList[0]);
graph3.add('E', graph3.origin.edgeList[1]);
graph3.add('F', graph3.origin.edgeList[0]);

/*
       A
    /     \
   B(0)     C(1)
   /  |      /
  F   D(0)   E


*/



// console.log(graph1.routeExists_BFS(graph1.origin, graph1.origin.edgeList[0]))

// console.log(graph1.routeExists_BFS(new GraphNode('Z'), graph1.origin.edgeList[0]))

// console.log(
//   graph1.routeExists_BFS(graph1.origin, graph1.origin)
// )

// console.log(
//   graph1.routeExists_DFS(graph1.origin, graph1.origin.edgeList[0])
// )

// console.log(graph1.routeExists_DFS(new GraphNode('Z'), graph1.origin.edgeList[0]))

// console.log(
//   graph1.routeExists_DFS(graph1.origin, graph1.origin)
// )

// console.log(
//   graph1.routeExists_DFS(graph1.origin.edgeList[0], graph1.origin.edgeList[edgeList.length - 1])
// )

const nodeD = graph3.origin.edgeList[0].edgeList[0]
const nodeC = graph3.origin.edgeList[1]

console.log(
  graph1.routeExists_DFS(nodeD, nodeC)
)