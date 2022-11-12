"use strict";

/** Node: node for a singly linked list. */
class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. Returns undefined. */
  push(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if LL has no head node, assign new node to head,
    // else assign new node to tail
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    // assign new node to tail of LL
    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. Returns undefined. */
  unshift(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if LL has no tail node, assign new node to tail,
    // else assign new node to head
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    // assign new Node to head of LL
    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    // throw error if LL is empty
    if (this.length === 0) throw new Error;

    // remember tail node to remove
    const removedNode = this.tail;

    // start current node at head and find new tail node
    let currNode = this.head;

    while (currNode.next !== null && currNode.next !== removedNode) {
      currNode = currNode.next;
    }

    // if there's one node, assign head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      currNode.next = null;
      this.tail = currNode;
    }

    this.length--;

    return removedNode.val;
  }

  /** shift(): return & remove first item. */
  shift() {
    // throw error if LL is empty
    if (this.length === 0) throw new Error;

    // remember head node to remove
    const removedNode = this.head;

    // if there's one node, assign head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
    }

    this.length--;

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    // throw error if index not valid
    if (idx < 0 || idx >= this.length) throw new Error;

    let currIdx = 0;
    let currNode = this.head;

    // find node at index
    while (currIdx < idx) {
      currNode = currNode.next;
      currIdx++;
    }

    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val. */
  setAt(idx, val) {
    // throw error if index not valid
    if (idx < 0 || idx >= this.length) throw new Error;

    let currIdx = 0;
    let currNode = this.head;

    // find node at index
    while (currIdx < idx) {
      currNode = currNode.next;
      currIdx++;
    }

    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    // throw error if index not valid
    if (idx < 0 || idx > this.length) throw new Error;

    // inserting at beginning of LL
    if (idx === 0) return this.unshift(val);

    // inserting at end of LL
    if (idx === this.length) return this.push(val);

    let currIdx = 0;
    let currNode = this.head;

    // find node before index
    while (currIdx < idx - 1) {
      currNode = currNode.next;
      currIdx++;
    }

    // create new node with Node class
    let newNode = new Node(val);

    newNode.next = currNode.next;
    currNode.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx. */
  removeAt(idx) {
    // throw error if index not valid
    if (idx < 0 || idx >= this.length) throw new Error;

    // removing at beginning of LL
    if (idx === 0) return this.shift();

    // removing at end of LL
    if (idx === this.length - 1) return this.pop();

    let currIdx = 0;
    let currNode = this.head;

    // find node before index
    while (currIdx < idx - 1) {
      currNode = currNode.next;
      currIdx++;
    }

    // remember node to remove
    const removedNode = currNode.next;

    currNode.next = currNode.next.next;
    this.length--;

    return removedNode.val;
  }

  /** average(): return an average of all values in the list. */
  average() {
    // returns 0 if empty LL
    if (this.length === 0) return 0;

    let sum = 0;
    let currNode = this.head;

    while (currNode) {
      sum += currNode.val;
      currNode = currNode.next;
    }

    return (sum / this.length);
  }

  /** reverseInPlace() reverse list in place. Returns undefined. */
  reverseInPlace() {
    // return if LL is empty or only has one node
    if (this.length < 2) return;

    // start at head node and set previous node to null
    let currNode = this.head;
    let prevNode = null;

    // swap head and tail nodes
    this.head = this.tail;
    this.tail = currNode;

    while (currNode) {
      // save the next node before switching pointers
      let nextNode = currNode.next;

      // set current nodes next to previous node
      currNode.next = prevNode;

      // previous node becomes the current node
      prevNode = currNode;

      // current node becomes next node that was saved
      currNode = nextNode;
    }
  }

}

module.exports = LinkedList;
