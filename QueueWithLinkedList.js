class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this.printList();
    }
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
    printList(){
        let current = this.first;
        let array =[]
        while (current) {
            array.push(current.value)
            current = current.next
        }
        return array
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  console.log(myQueue.enqueue('Pavel'))
//   myQueue.peek();
//   myQueue.dequeue();
//   myQueue.dequeue();
//   myQueue.dequeue();
//   myQueue.peek();