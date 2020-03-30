let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

let str = JSON.stringify(arr);

const result = arr.flat(Infinity);

console.log("result", result);
