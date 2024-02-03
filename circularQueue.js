//circular queue

class CircularQueue {
  constructor(capacity) {
    this.values = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.values.length === this.capacity;
  }

  isEmpty() {
    return this.values.length === 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.values[this.rear] = value;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      if (this.isEmpty()) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.values[this.rear] = value;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedItem = this.values[this.front];
    this.fornt = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return dequeuedItem.value;
  }
}