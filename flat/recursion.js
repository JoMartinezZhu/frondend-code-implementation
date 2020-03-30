let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

// function flat(sourceArray = []) {
//     let result = [];
//     function executor(arr = []) {
//         for (let idx = 0; idx < arr.length; idx++) {
//             let item = arr[idx];
//             if (Array.isArray(item)) {
//                 executor(item);
//             } else {
//                 result.push(item);
//             }
//         }
//     }
//     executor(sourceArray);
//     return result;
// }

/*
let result = [];
function flat(sourceArray=[]){
    for(let i=0;i<sourceArray.length;i++){
        let item = sourceArray[i]
        if(Array.isArray(item)){
            flat(item);
        }else{
            result.push(item);
        }
    }
}

flat(arr);
console.log("recursion result", result);
*/

// const result = flat(arr);
// console.log("recursion result", result);

let result = [];
function flat(sourceArray = []) {
    for (let i = 0; i < sourceArray.length; i++) {
        let item = sourceArray[i];
        if (Array.isArray(item)) {
            flat(item);
        } else {
            result.push(item);
        }
    }
}

flat(arr);

console.log("recursion result", result);
