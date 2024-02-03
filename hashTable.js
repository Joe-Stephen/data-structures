//hash table or hashmap

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  isEmpty() {
    return this.size === 0;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      return this.table[index];
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = undefined;
    }
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, " ", this.table[i]);
      }
    }
  }
}