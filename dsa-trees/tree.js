/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    // return 0 if tree is empty
    if (!this.root) return 0;

    // initialize node stack to visit
    let stackToVisit = [this.root];
    let sum = 0;

    // while there are nodes in stack to check
    // pop node off and push children to the end of array
    while (stackToVisit.length) {
      let currNode = stackToVisit.pop();

      sum += currNode.val;

      for (let child of currNode.children) {
        stackToVisit.push(child);
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    // return 0 if tree is empty
    if (!this.root) return 0;

    // initialize node stack to visit
    let stackToVisit = [this.root];
    let count = 0;

    // while there are nodes in stack to check
    // pop node off and push children to the end of array
    while (stackToVisit.length) {
      let currNode = stackToVisit.pop();

      if (currNode.val % 2 === 0) count++;

      for (let child of currNode.children) {
        stackToVisit.push(child);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    // return 0 if tree is empty
    if (!this.root) return 0;

    // initialize node stack to visit
    let stackToVisit = [this.root];
    let count = 0;

    // while there are nodes in stack to check
    // pop node off and push children to the end of array
    while (stackToVisit.length) {
      let currNode = stackToVisit.pop();

      if (currNode.val > lowerBound) count++;

      for (let child of currNode.children) {
        stackToVisit.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
