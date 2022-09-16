//LIFO

class Stack {
    constructor(){
      this.data = [];
    }
    peek() {
       return this.data[this.data.length-1]
    }
    push(value){
        this.data.push(value);
        return this.data;
    }
    pop(){
       this.data.pop();
       return this.printList()
    }
    printList(){
       return this.data
    }
    isEmpty(){
        if(this.data.length == 0) return true;
        return false;
    }
  }
  
  const myStack = new Stack();
  myStack.push(12)
  myStack.push(16)
  myStack.push(19)
  //console.log(myStack.printList())
 // console.log(myStack.peek())
 console.log(myStack.isEmpty())
 console.log(myStack.peek())