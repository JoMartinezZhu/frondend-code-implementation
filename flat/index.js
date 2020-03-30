let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

let str = JSON.stringify(arr);

const flatStr = str.replace(/(\[|\])/g, "").split(",");

console.log(arr);
console.log(str);
console.log(flatStr);
