

const checkRouteBetweenNodes = (node, targetNode) => {
  const detectConnection = (node, targetNode) => {
    /*
      if (node === targetNode) {
        connectionExists = true
      } else if (not visited) {
        // add node to visitedNodesSet

        for (let node of node.edgesList) {
          detectConnection(node, targetNode)
        }
      }
    */
  }

  const visitedNodesSet = new Set()
  let connectionExists = false
  detectConnection(node, targetNode)
  return connectionExists
}