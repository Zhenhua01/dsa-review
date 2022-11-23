/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // can solve recursively or use BFS w/ queue below:
  minDepth(node = this.root) {
    // return 0 if tree is empty
    if (!node) return 0;

    // initialize node queue to visit
    let queueToVisit = [node];
    let count = 0;

    // while there are nodes in queue to check
    while (queueToVisit.length) {
      let currNode = queueToVisit.shift();

      // returns the current count when left and right nodes end
      if (!currNode.left && !currNode.right) return count;

      if (currNode.left) {
        count++;
        queueToVisit.push(currNode.left);
      }

      if (currNode.right) {
        count++;
        queueToVisit.push(currNode.right);
      }
    }

    return count;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // can solve recursively or use BFS w/ queue below:
  maxDepth(node = this.root) {
    // return 0 if tree is empty
    if (!node) return 0;

    // initialize node queue to visit
    let queueToVisit = [node];
    let count = 0;

    // while there are nodes in queue to check
    while (queueToVisit.length) {
      count++;

      for (let i = 0; i < queueToVisit.length; i++) {
        let current = queueToVisit.shift();

        if (current.left) {
          queueToVisit.push(current.left);
        }

        if (current.right) {
          queueToVisit.push(current.right);
        }
      }
    }

    return count;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound, node = this.root) {
    // return null if empty tree
    if (!node) return null;

    // initialize node stack to visit
    let stackToVisit = [node];
    let larger = Infinity;

    // while there are nodes in stack to check
    while (stackToVisit.length) {
      let currNode = stackToVisit.pop();

      // replace with new value if fits both condition
      if (currNode.val > lowerBound && currNode.val < larger) larger = currNode.val;

      if (currNode.left) stackToVisit.push(currNode.left);
      if (currNode.right) stackToVisit.push(currNode.right);
    }

    // return next larger value if found, else null
    return larger === Infinity ? null : larger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */
  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
