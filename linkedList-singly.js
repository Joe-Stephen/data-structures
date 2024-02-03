// singly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SlinglyList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      if (curr) {
        curr.next = node;
      }
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      return console.log("The list is empty!");
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.value, " --> ");
      curr = curr.next;
    }
  }

  insertAtIndex(value, idx) {
    if (this.isEmpty() || idx > this.size || idx < 0) {
      return null;
    }
    if (idx === 0) {
      this.prepend(value);
    }
    if (idx === this.size) {
      this.append(value);
    }
    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  delete(value) {
    if (this.isEmpty()) {
      return false;
    }
    if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      prev.next = prev.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  find(value) {
    if (!value) {
      return null;
    }
    let prev = this.head;
    let i = 0;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
      i++;
    }
    return prev ? i + 1 : null;
  }

  reverse() {
    if (this.isEmpty() || this.size === 1) {
      return null;
    }
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = pre;
  }
}