class GraphNode {
  constructor(data) {
    this.data = data
    this.edgeList = []
  }
}

class DirectedGraph {
  constructor() {
    this.origin = null
  }

  add(data, node) {
    const newNode = new GraphNode(data)

    if (!this.origin) {
      this.origin = newNode
    } else {
      node.edgeList.push(newNode)
    }

    return newNode
  }

  createCycle(node) {
    node.edgeList.push(node)
  }
}

module.exports = { DirectedGraph, GraphNode }

/*
graph1.add('A', null);
graph1.add('B', graph1.origin);
graph1.add('C', graph1.origin);
graph1.add('D', graph1.origin.edgeList[0]);
graph1.add('E', graph1.origin);
graph1.add('F', graph1.origin.edgeList[1])
*/