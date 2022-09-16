/**
 * this gives the structure of the value and pointer of a linkedList
 * @param{number}
 * @return{void}
 */
 class Node {
  constructor(value){
      this.value = value;
      this.next = null
  }
}
/**
* this is a data structure where each item has a pointer to the next item in the list
* @return{void}
*/
class LinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  /**
* Adds a value at the end of the list
* @param{any}
* @return{void}
*/
  append(value){
      const node = new Node(value);
      if(this.tail) this.tail.next = node;
      this.tail = node;
      if(!this.head) this.head = node;
      this.length++;
      return this.printList()
  }
  /** 
  * Adds a value at the beginning of the list
  * @param{any}
  * @return{array}
  */
  prepend(value){
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      if(!this.tail) this.tail = node
      this.length++;
      return this.printList()
  }
   /** 
  * Remove a value by index from the list
  * @param{any}
  * @return{array}
  */
  removeByIndex(index){
      const node = this.findNode(index-1);
     let unwantedNode = node.next;
     node.next = unwantedNode.next;
     this.length--;
     return this.printList()  
  }
     /** 
  * Remove a value from the list
  * @param{any}
  * @return{array}
  */
  removeByValue(value){
      let result = this.find(value);
      if(result === 'NOT_FOUND') throw new Error('INDEX_OUT_OF_BOUND');
      return this.removeByIndex(result.index)

  }
  find(value){
      
      let current = this.head;
      let result={};
      let index = 0;
      while(current){
          if(current.value == value) {
              result.index = index;
              result.value = value
              break;
          };
          index++;
          current = current.next
      }
      return [...Object.values(result)].length > 0 ? result : 'NOT_FOUND'
  }
  findNode(index){
      if(index > this.length) throw new Error('INDEX_OUT_OF_BOUND');
      
      let current = this.head;
      let count = 0;
      while(count !== index){
          current = current.next
          count++
      }
      return current ? current : 'NOT_FOUND'
  }
  printList(){
      const array =[];
      let current = this.head;
      while(current){
          array.push(current.value);
          current = current.next
      }
      return array
  }
      /** 
  * Reverse list
  * @return{array}
  */
  reverse(){
      if(!this.head.next) return this.head;
      let first = this.head;
      let second = first.next;
      while(second){
          let temp = second.next;
          second.next = first;
          first = second;
          second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this.printList()
  }
}

let linkedList = new LinkedList();

linkedList.append(5);
linkedList.prepend(44);
linkedList.append(16);
linkedList.append(1);
linkedList.prepend(23);
// linkedList.insert(2, 99);
// linkedList.insert(20, 88);
// linkedList.remove(2);
console.log(linkedList.reverse())




// // add a method remove() to the linked list that deletes a node to the specified index.

// /**
//  * Is a linear data structure where an element only knows about the next one after it.
//  */

// class LinkedList {
//     constructor() {
//       this.head = {
//         value: null,
//         next: null
//       };
//       this.tail = this.head;
//       this.length = 1;
//     }

//     append(value) {
//       const newNode = {
//         value: value,
//         next: null
//       }
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//     reverse(){
//         if(!this.head.next){
//             return this.head
//         }
//         let first =  this.head;
//          this.tail =  this.head;
//         let second = first.next;
//         while(second){
//             let temp = second.next;
//             second.next = first;
//             first = second;
//             second = temp; 
//         }
//         this.head.next = null;
//         this.head = first;
//         return this.printList()
//     }
//     prepend(value) {
//       const newNode = {
//         value: value,
//         next: null
//       }
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//       return this;
//     }
//     printList() {
//       const array = [];
//       let currentNode = this.head;
//       while(currentNode !== null){
//           array.push(currentNode.value)
//           currentNode = currentNode.next
//       }
//       return array;
//     }
//     insert(index, value){
//       //Check for proper parameters;
//       if(index >= this.length) {
       
//         return this.append(value);
//       }
      
//       const newNode = {
//         value: value,
//         next: null
//       }
//       const leader = this.traverseToIndex(index-1);
//       const holdingPointer = leader.next;
//       leader.next = newNode;
//       newNode.next = holdingPointer;
//       this.length++;
//       return this.printList();
//     }
//     traverseToIndex(index) {
//       //Check parameters
//       let counter = 0;
//       let currentNode = this.head;
//       while(counter !== index){
//         currentNode = currentNode.next;
//         counter++;
//       }
//       return currentNode;
//     }
//     findByIdex(index) {
//         //Check parameters
//         if(index > this.length) return 'index out of bound error'
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter !== index){
//           currentNode = currentNode.next;
//           counter++;
//         }
//         return currentNode.value;
//       }
//     remove(index) {
//       // Check Parameters      
//       const leader = this.traverseToIndex(index-1);
//       const unwantedNode = leader.next;
//       leader.next = unwantedNode.next;
//       this.length--;
//       return this.printList();
//     }
    
//   }
  
//   let myLinkedList = new LinkedList();
  
//   myLinkedList.append(5);
//   myLinkedList.append(16);
//   myLinkedList.prepend(1);
//   myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
//   myLinkedList.remove(2);
//   console.log(myLinkedList.printList())