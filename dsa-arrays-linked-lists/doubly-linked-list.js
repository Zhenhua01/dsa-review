"use strict";

/** Node: node for a doubly linked list. */
class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** DoublyLinkedList: chained together nodes. */
class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index. */
  _get(idx) {
    let currIdx = 0;
    let currNode = this.head;

    // find node at index
    while (!currNode && currIdx !== idx) {
      currNode = currNode.next;
      currIdx++;
    }

    return currNode;
  }

  /** push(val): add new value to end of list. Returns undefined. */
  push(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if DLL has no head node, assign new node to head,
    // else assign new node to tail and new node points back to tail
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    // assign new node to tail of DLL
    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. Returns undefined. */
  unshift(val) {
    // create new node with Node class
    let newNode = new Node(val);

    // if DLL has no tail node, assign new node to tail,
    // else assign new node to head and new node points back to head
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    // assign new Node to head of DLL
    this.head = newNode;

    this.length++;
  }

  /** pop(): remove last item & return its value. */
  pop() {
    // throw error if DLL is empty
    if (this.length === 0) throw new Error;

    // remember tail node to remove
    const removedNode = this.tail;

    // if there's one node, assign head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }

    this.length--;

    return removedNode.val;
  }

  /** shift(): remove first item & return its value. */
  shift() {
    // throw error if DLL is empty
    if (this.length === 0) throw new Error;

    // remember tail node to remove
    const removedNode = this.head;

    // if there's one node, assign head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
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

    // inserting at beginning of DLL
    if (idx === 0) return this.unshift(val);

    // inserting at end of DLL
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
    newNode.prev = currNode;
    currNode.next.prev = newNode;
    currNode.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx. */
  removeAt(idx) {
    // throw error if index not valid
    if (idx < 0 || idx >= this.length) throw new Error;

    // removing at beginning of DLL
    if (idx === 0) return this.shift();

    // removing at end of DLL
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
    currNode.next.prev = currNode;

    this.length--;

    return removedNode.val;
  }

  /** average(): return an average of all values in the list. */
  average() {
    // returns 0 if empty DLL
    if (this.length === 0) return 0;

    let sum = 0;
    let currNode = this.head;

    while (currNode) {
      sum += currNode.val;
      currNode = currNode.next;
    }

    return (sum / this.length);
  }
}

module.exports = DoublyLinkedList;
