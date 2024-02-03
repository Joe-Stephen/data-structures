//doubly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.sizel = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = this.tail.next;
      this.size++;
    }
  }

  prepend(value) {
    if (this.isEmpty()) {
      this.append(value);
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
    }
  }

  traverseToIdx(idx) {
    if (this.isEmpty()) {
      return null;
    }
    if (typeof idx !== "number") {
      return null;
    }
    if (idx < 0) {
      return null;
    }
    let counter = 0;
    let curr = this.head;
    while (counter !== idx) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }

  insertToIdx(value, idx) {
    if (this.isEmpty()) {
      return null;
    }
    const node = new Node(value);
    let prevNode = traveseToIdx(idx - 1);
    if (prevNode) {
      let targetNode = prevNode.next;
      prevNode.next = node;
      node.prev = prevNode;
      targetNode.prev = node;
      node.next = targetNode;
      this.size++;
      return true;
    }
    return false;
  }

  deleteHead() {
    if (this.isEmpty() || this.size === 0) {
      return null;
    }
    const headValue = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }
    return headValue;
  }

  deleteTail() {
    if (this.isEmpty() || this.size === 0) {
      return null;
    }
    const tailValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let prev = this.tail.prev;
      prev.next = null;
      this.tail.prev = null;
      this.tail = prev;
      this.size--;
    }
    return tailValue;
  }

  deleteIdx(idx) {
    if (this.isEmpty() || idx < 0 || typeof idx !== "number") {
      return null;
    }
    if (idx === 0) {
      return this.deleteHead();
    }
    if (idx === this.size - 1) {
      return this.deleteTail();
    }
    let prevNode = this.traverseToIdx(idx - 1);
    if (prevNode) {
      let target = prevNode.next;
      const targetValue = target.value;
      let postNode = target.next;
      prevNode.next = postNode;
      postNode.prev = prevNode;
      target.next = null;
      target.prev = null;
      return targetValue;
    }
    return false;
  }
}