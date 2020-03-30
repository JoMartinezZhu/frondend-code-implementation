Array.prototype.reduce = function(callbackfn, initialValue) {
    if (Object.prototype.toString.call(callbackfn) !== "[object Function]") {
        throw new TypeError(callbackfn + " is not a function");
    }

    let source = Object.create(this);
    let len = this.length >>> 0; // 保证 len 为整数

    let k = 0;

    if (initialValue === undefined) {
        for (; k < len; k++) {
            if (k in O) {
                initialValue = O[k];
                k++;
                break;
            }
        }
    }

    for (; k < len; k++) {
        if (k in source) {
            let kValue = source[k];
            initialValue = callbackfn.call(undefined, initialValue, kValue, source);
        }
    }

    return initialValue;
};

// const a = [1, 2, 3];
// const result = a.reduce(function(sum, item) {
//     return (sum += item);
// }, 0);

let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

function flat(sourceArray) {
    return sourceArray.reduce((result, item) => result.concat(Array.isArray(item) ? flat(item) : item), []);
}

const result = flat(arr);

console.log("result", result);
