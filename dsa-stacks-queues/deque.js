"use strict";

/** Node: node for a deque. */
class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** Deque: chained-together nodes where you can
 *  add to the end or beginning and remove from the end or beginning. */
class Deque {
  first = null;
  last = null;
  size = 0;

  /** appendRight(val): add new value to end of the deque.
   * Returns undefined. */
  appendRight(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if deque is empty, set new node to start of deque
    // else current last points at new node
    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
    }

    // set new node as end of deque
    this.last = newNode;

    this.size++;
  }

  /** popRight(): remove a node from the end of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */
  popRight() {
    if (this.isEmpty()) throw new Error;

    // remember node to be removed
    const removedNode = this.last;

    // if there's one node, assign first and last to null
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = removedNode.prev;
      this.last.next = null;
    }

    this.size--;

    return removedNode.val;
  }

  /** appendLeft(val): add new value to beginning of the deque.
   * Returns undefined. */
  appendLeft(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if deque is empty, set new node to end of deque
    // else current last points at new node
    if (this.isEmpty()) {
      this.last = newNode;
    } else {
      this.first.prev = newNode;
      newNode.next = this.first;
    }

    // set new node as end of deque
    this.first = newNode;

    this.size++;
  }

  /** popLeft(): remove a node from the beginning of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */
  popLeft() {
    if (this.isEmpty()) throw new Error;

    // remember node to be removed
    const removedNode = this.first;

    // if there's one node, assign head and tail to null
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      // this.first.prev = null;
    }

    this.size--;

    return removedNode.val;
  }

  /** peekRight(): return the value of the end node in the deque. */
  peekRight() {
    if (this.isEmpty()) throw new Error;

    return this.last.val;
  }

  /** peekLeft(): return the value of the beginning node in the deque. */
  peekLeft() {
    if (this.isEmpty()) throw new Error;

    return this.first.val;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;
