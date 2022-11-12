"use strict";

/** Node: node for a stack. */
class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  add to the top or remove from the top. */
class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */
  push(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if there is a top, new node points to prev top
    if (this.top !== null) newNode.next = this.top;

    // set new node as top of stack
    this.top = newNode;

    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) throw new Error;

    // remember node to be removed
    const removedNode = this.top;

    // set next node as top of stack
    this.top = this.top.next;

    this.size--;

    return removedNode.val;
  }

  /** peek(): return the value of the top node in the stack. */
  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
