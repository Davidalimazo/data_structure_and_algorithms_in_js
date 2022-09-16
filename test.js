// function test(n){
//     let array = []
//     for (let i = n; i > 0; i--) {
//        array.push(i)
//     }
//     return array
// }
// console.log(test(5))

//const reverseSeq = length => Array.from({length}, () => length--)

//const reverseSeq2 = n =>  Array(n).fill(0).map((e, i) => n - i );

//console.log(reverseSeq(5))

// function score(n){
//     let points = 0;
//     n.forEach((v, i)=>{
//         const [x, y] = v.split(':')
//         if(x > y){
//             points += 3;
//         }
//         else  if(x == y){
//             points += 1;
//         }else{
//             points += 0;
//         }
//     })
//     return points
// }

// const s = ["3:1", "2:2", "0:1"]
//   console.log(score(s))

// function greet(a){
    
//   return a.join(' ')
// }

// const msge = ['hello', 'world', 'this', 'is', 'great'];
// console.log(greet(msge))

// function multiple(x, n){
//      return Array.from({length:n}, (v, i)=> (i+1)*x)
    
// }


// console.log(multiple(2, 5))

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };