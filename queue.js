//queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      this.size++;
      return true;
    }
    this.rear.next = node;
    this.rear = node;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedItem = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    dequeuedItem.next = null;
    this.size--;
    return dequeuedItem.value;
  }
}

//queue using stack

class QueueUsingStack {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(value) {
    this.enqueueStack.push(value);
  }

  dequeue() {
    if (this.dequeueStack.length === 0) {
      if (this.enqueueStack.length === 0) {
        return null;
      } else {
        while (this.enqueueStack.length > 0) {
          this.dequeueStack.push(this.enqueueStack.pop());
        }
      }
      return this.dequeueStack.pop();
    }
  }
}