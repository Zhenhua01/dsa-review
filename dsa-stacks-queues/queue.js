"use strict";

/** Node: node for a queue. */
class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if queue is empty, set new node to start of queue
    // else current last points at new node
    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    // set new node as end of queue
    this.last = newNode;

    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (this.isEmpty()) throw new Error;

    // remember node to be removed
    const removedNode = this.first;

    // set next node as start of queue
    this.first = this.first.next;

    // if queue becomes empty, set last to null
    if (this.first === null) this.last = null;

    this.size--;

    return removedNode.val;

  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.isEmpty()) throw new Error;

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
