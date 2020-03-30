// Array.prototype.map = function(callbackfn, thisArg) {
//     /* 异常处理 */
//     // 1.数组类型异常处理
//     if (this === null || this === undefined) {
//         throw new TypeError("connot read property 'map' of null or undefined");
//     }
//     // 处理回调函数异常
//     if (Object.prototype.toString.call(callbackfn) !== "[object Function]") {
//         throw new TypeError(callbackfn + "is not a function");
//     }

//     // 草案中提出要先转换为对象；
//     let O = Object.create(this);
//     console.log("this", this);
//     console.log("O", O);
//     console.log("O.length", O.length);
//     let T = thisArg;

//     let len = O.length >>> 0;
//     console.log("O.len", len);

//     let A = new Array(len);
//     for (let k = 0; k < len; k++) {
//         if (k in O) {
//             let kValue = O[k];
//             // 一次对数组中的每个元素执行callbackfn 并指定 this
//             let mappedValue = callbackfn.call(T, kValue, k, O);
//             A[k] = mappedValue;
//         }
//     }
//     return A;
// };

// var a = [1, 2, 3, 4];
// a.map(function(i) {
//     console.log("i", i);
// });

Array.prototype.map = function(callbackfn, thisArg) {
    if (Object.prototype.toString.call(callbackfn) !== "[object Function]") {
        throw new TypeError(callbackfn + " is not a function");
    }

    let O = Object.create(this);
    console.log("O: ", O);
    let len = O.length >>> 0;
    console.log("len: ", len);

    let result = new Array(len);

    for (let i = 0; i < len; i++) {
        let mappedValue = callbackfn.call(thisArg, this[i], i, this);
        result[i] = mappedValue;
    }
    return result;
};

var a = [1, 2, 3, 4];

console.log(
    [].map.call(1, function(item, index, arr) {
        return item * 2;
    })
);
