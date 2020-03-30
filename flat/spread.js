let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

function flat() {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr);
    }
}

flat();
console.log("spread result", arr);
