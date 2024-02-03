const { join } = require("path");

// singly linked list
 class Node{
   constructor(value){
     this.value=value
     this.next=null
   }
 }
class SlinglyList{
  constructor(){
    this.head=null
    this.size=0
  }

  isEmpty(){
    return this.head===null;
  }

  prepend(value){
    const node=new Node(value);
    if(this.isEmpty()){
      this.head=node;
    }else{
      node.next=this.head;
      this.head=node;
    }
    this.size++;
  }

  append(value){
    if(this.isEmpty()){
      this.prepend(value);
    }else{
      const node=new Node(value);
      let curr=this.head;
      while(curr.next){
        curr=curr.next;
      }
      if(curr){
        curr.next=node;
      }
      this.size++;
    }
  }

  print(){
    if(this.isEmpty()){
      return console.log('The list is empty!');
    }
    let curr= this.head;
    while(curr){
      console.log(curr.value," --> ");
      curr=curr.next;
    }
  }

  insertAtIndex(value, idx){
    if(this.isEmpty() || idx>this.size || idx<0){
      return null;
    }
    if(idx===0){
      this.prepend(value);
    }
    if(idx===this.size){
      this.append(value);
    }
    const node = new Node(value);
    let prev= this.head;
    for(let i=0; i<idx-1; i++){
      prev=prev.next;
    }
    node.next=prev.next;
    prev.next=node;
    this.size++;
  }

  delete(value){
    if(this.isEmpty()){
      return false;
    }
    if(value===this.head.value){
      this.head=this.head.next;
      this.size--;
      return true;
    }
    let prev=this.head;
    while(prev.next && prev.next.value!==value){
      prev=prev.next;
    }
    if(prev.next){
      prev.next=prev.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  find(value){
    if(!value){
      return null;
    }
    let prev = this.head;
    let i=0;
    while(prev.next && prev.next.value!==value){
      prev=prev.next;
      i++;
    }
    return prev ? i + 1 : null;
  }

  reverse(){
    if(this.isEmpty() || this.size===1){
      return null;
    }
    let prev=null;
    let curr=this.head;
    while(curr){
      let next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }
    this.head=pre;
  }
  }

//doubly linked list

class Node {
  constructor(value){
    this.value=value;
    this.next=null;
    this.prev=null;
  }
}

class DoublyList {
  constructor(){
    this.head=null;
    this.tail=null;
    this.sizel=0;
  }

  isEmpty(){
    return this.head===null;
  }

  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head=node;
      this.tail=node;
      this.size++;
    }else{
      node.prev=this.tail;
      this.tail.next=node;
      this.tail=this.tail.next;
      this.size++;      
    }
  }

  prepend(value){
    if(this.isEmpty()){
      this.append(value);
    }else{
      const node = new Node(value);
      node.next=this.head;
      this.head.prev=node;
      this.head=node;
      this.size++;      
    }    
  }

  traverseToIdx(idx){
    if(this.isEmpty()){
      return null
    }
    if(typeof idx!=='number'){
      return null;
    }
    if(idx<0){
      return null;
    }
    let counter=0;
    let curr=this.head;
    while(counter!==idx){
      curr=curr.next;
      counter++;
    }
    return curr;
  }

  insertToIdx(value, idx){
    if(this.isEmpty()){
      return null;
    }
    const node=new Node(value);
    let prevNode=traveseToIdx(idx-1);
    if(prevNode){
      let targetNode=prevNode.next;
      prevNode.next=node;
      node.prev=prevNode;
      targetNode.prev=node;
      node.next=targetNode;
      this.size++;
      return true;
    }
    return false;    
  }

  deleteHead(){
    if(this.isEmpty() || this.size===0){
      return null;
    }
    const headValue=this.head.value;    
    if(this.size===1){
      this.head=null;
      this.tail=null;
      this.size--;
    }else{
      this.head=this.head.next;
      this.head.prev=null;
      this.size--;
    }
      return headValue;    
  }

  deleteTail(){
    if(this.isEmpty() || this.size===0){
      return null;
    }
    const tailValue=this.tail.value;
    if(this.size===1){
      this.head=null;
      this.tail=null;
      this.size--;
    }else{
      let prev=this.tail.prev;
      prev.next=null;
      this.tail.prev=null;
      this.tail=prev;
      this.size--;
    }    
    return tailValue;
  }

  deleteIdx(idx){
    if(this.isEmpty() || idx<0 || typeof idx!=='number'){
      return null;
    }
    if(idx===0){
      return this.deleteHead();
    }
    if(idx===this.size-1){
      return this.deleteTail();
    }
    let prevNode=this.traverseToIdx(idx-1);
    if(prevNode){
      let target=prevNode.next;
      const targetValue=target.value;
      let postNode=target.next;
      prevNode.next=postNode;
      postNode.prev=prevNode;
      target.next=null;
      target.prev=null;
      return targetValue;
    }
    return false;
  }
}

//stack

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stack{
  constructor(){
    this.top=null;
    this.size=0;
  }

  isEmpty(){
    return this.top===null;
  }

  push(value){
    const node=new Node(value);
    if(this.isEmpty()){
      this.top=node;
      this.size++;
      return true;
    }
    node.next=this.top;
    this.top=node;
    this.size++;
    return true;
  } 

  pop(){
    if(this.isEmpty()){
      return null;
    }
    const poppedValue=this.top.value;
    this.top=this.top.next;
    this.size--;
    return poppedValue;
  }

  peek(){
    return this.size>0 ?this.top.value:null;
  }

  print(){
    if(this.isEmpty()){
      return null;
    }
    let curr=this.top;
    while(curr){
      console.log(curr," ");
      curr=curr.next;
    }
  }

  findIndex(value){
    let curr=this.top;
    for(let i=0; i<this.size; i++){
      if(curr&&curr.value===value){
        return i;
      }
      curr=curr.next;
    };
    return null;
  }

  findValue(idx){
    if(!idx || idx<0 || idx>=this.size){
      return null;
    }
    let curr=this.top;
    let position=0;
    while(position<idx && curr){
      curr=curr.next;
      position++;
    }
    if(curr){
      return curr.value;
    }
    return null;
  }

  reverse(){
    if(this.isEmpty() || this.size===1){
      return null;
    }
    let prev=null;
    let curr=this.top;
    while(curr){
      let next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }
    this.top=prev;
    return true;
  }
}

//queue

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Queue{
  constructor(){
    this.front=null;
    this.rear=null;
    this.size=0;
  }

  isEmpty(){
    return this.size===0;
  }

  enqueue(value){
    const node=new Node(value);
    if(this.isEmpty()){
      this.front=node;
      this.rear=node;
      this.size++;
      return true;
    }
    this.rear.next=node;
    this.rear=node;
    this.size++
    return true;
  }

  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    const dequeuedItem=this.front;
    if(this.front===this.rear){
      this.front=null;
      this.rear=null;
    }else{
      this.front=this.front.next;
    }
    dequeuedItem.next=null;
    this.size--;
    return dequeuedItem.value;
  }
}

//queue using stack

  class QueueUsingStack{
  constructor(){
  this.enqueueStack=new Stack();
  this.dequeueStack=new Stack();  
  }

enqueue(value){
  this.enqueueStack.push(value);
}

dequeue(){
  if(this.dequeueStack.length===0){
    if(this.enqueueStack.length===0){
      return null;
    }else{
      while(this.enqueueStack.length>0){
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}
  }

//circular queue

class CircularQueue{
  constructor(capacity){
    this.values=new Array(capacity);
    this.capacity=capacity;
    this.front=-1;
    this.rear=-1;
  }

  isFull(){
    return this.values.length===this.capacity;
  }

  isEmpty(){
    return this.values.length===0;
  }

  enqueue(value){
    if(this.isFull()){
    this.rear=(this.rear+1)%this.capacity;
    this.values[this.rear]=value;
    if(this.front===-1){
      this.front=this.rear;
    }
    }else{
      if(this.isEmpty()){
        this.front=0;
      }
      this.rear=(this.rear+1)%this.capacity;
      this.values[this.rear]=value;      
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    const dequeuedItem=this.values[this.front];
    this.fornt=(this.front+1)%this.capacity;
    if(this.isEmpty()){
      this.front=-1;
      this.rear=-1;
    }
    return dequeuedItem.value;
  }  
}

//hash table or hashmap

class HashTable{
  constructor(size){
    this.table=new Array(size);
    this.size=size;
  }

  isEmpty(){
    return this.size===0;
  }

  hash(key){
    let total=0;
    for (let i=0; i<key.length; i++){
      total+=key.charCodeAt(i);
    }
    return total%this.size;
  }

  set(key, value){
    let index=this.hash(key);
    this.table[index]=value;
  }

  get(key){
    let index = this.hash(key);
      if(this.table[index]){
        return this.table[index];
      }
    return null;
    }

  delete(key){
    const index = this.hash(key);
    if(this.table[index]){
      this.table[index]=undefined;
    }
  }

  print(){
    if(this.isEmpty()){
      return null;
    }
    for(let i=0; i<this.size; i++){
      if(this.table[i]){
        console.log(i," ",this.table[i])
      }
    }    
  }
  }

//BST

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null;
  }

  isEmpty(){
    return this.rootl===null;
  }

  insert(value){
    const node=new Node(value);
    if(this.isEmpty()){
      this.root=node;
    }else{
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node){
    if(node.value<root.value){
      if(root.left===null){
        root.left=node;
      }else{
        this.insertNode(root.left, node);
      }
    }else if(node.value>root.value){
      if(root.right===null){
        root.right=node;
      }else{
        this.insertNode(root.right, node);        
      }
    }    
  }

  search(root, target){
    if(this.isEmpty()){
      return null;
    }
    if(root.value===target){
      return true;
    }else if(target<root.value){
      return this.search(root.left, target);
    }else{
      return this.search(root.right, target);
    }
    return false;
  }

  //BST DFS

  preOrder(root){
    if(root){
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value)
    }
  }

  //BST BFS
  BFS(root){
    let queue=[];
    queue.push(root);
    while(queue.length>0){
      let curr=queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left);
      }
      if(curr.right){
        queue.push(curr.right);
      }
    }
  }

  min(root){
    if(root.left===null){
      return root.value;
    }
    return this.min(root.left);
  }

  max(root){
    if(root.right===null){
      return root.value;
    }
    return this.max(root.right);
  }

  delete(value){
    return this.deleteNode(this.root, value);
  }

  deleteNode(root, value){
    if(!root){
      return null;
    }
    if(value<root.value){
      root.left=this.deleteNode(root.left, value);
    }else if(value>root.value){
      root.right=this.deleteNode(root.right, value);
    }else{
      if(!root.right && !root.left){
        return null;
      }
      if(!root.left && root.right){
        return root.right;
      }
      if(root.left && !root.right){
        return root.left;
      }
      root.value=this.min(root.right);
      root.right=this.deleteNode(root.right, root.value);
    }
    return root;
  }  
}

//graph