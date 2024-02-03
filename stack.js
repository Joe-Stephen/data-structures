//stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.size++;
      return true;
    }
    node.next = this.top;
    this.top = node;
    this.size++;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.size > 0 ? this.top.value : null;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.top;
    while (curr) {
      console.log(curr, " ");
      curr = curr.next;
    }
  }

  findIndex(value) {
    let curr = this.top;
    for (let i = 0; i < this.size; i++) {
      if (curr && curr.value === value) {
        return i;
      }
      curr = curr.next;
    }
    return null;
  }

  findValue(idx) {
    if (!idx || idx < 0 || idx >= this.size) {
      return null;
    }
    let curr = this.top;
    let position = 0;
    while (position < idx && curr) {
      curr = curr.next;
      position++;
    }
    if (curr) {
      return curr.value;
    }
    return null;
  }

  reverse() {
    if (this.isEmpty() || this.size === 1) {
      return null;
    }
    let prev = null;
    let curr = this.top;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.top = prev;
    return true;
  }
}