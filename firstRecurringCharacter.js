//Google Question
//Given an 
//let array = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an 
// let array = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an 
let array = [2,3,4,5];
//It should return undefined


function firstRecurringCharacter(input) {
    let set = new Set();
    let dup = [];
    for (let i = 0; i < input.length; i++) {
       if(set.has(input[i])){
            dup.push(input[i])
       } else{
            set.add(input[i])
       }
    }
    return dup[0]
}

console.log(firstRecurringCharacter(array))

//O(n)