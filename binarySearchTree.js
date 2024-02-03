//BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.rootl === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, target) {
    if (this.isEmpty()) {
      return null;
    }
    if (root.value === target) {
      return true;
    } else if (target < root.value) {
      return this.search(root.left, target);
    } else {
      return this.search(root.right, target);
    }
    return false;
  }

  //BST DFS

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //BST BFS
  BFS(root) {
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (root.left === null) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root) {
    if (root.right === null) {
      return root.value;
    }
    return this.max(root.right);
  }

  delete(value) {
    return this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.right && !root.left) {
        return null;
      }
      if (!root.left && root.right) {
        return root.right;
      }
      if (root.left && !root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}