Array.prototype.filter = function(callbackfn, thisArg) {
    if (this === null || this === undefined) {
        throw new TypeError("Connot read property filter of null or undefined");
    }

    if (Object.prototype.toString.call(callbackfn) !== "[object Function]") {
        throw new TypeError(callbackfn + " is not a function");
    }
    let array = this;

    if (Object.prototype.toString.call(array) !== "[object Array]") {
        throw new TypeError(callbackfn + " is not a function");
    }

    let len = array.length;
    let result = new Array();
    for (let i = 0; i < len; i++) {
        let filteredValue = callbackfn.call(thisArg, array[i], i, array);
        if (filteredValue) {
            result.push(array[i]);
        }
    }

    return result;
};

let flag = true;
while (flag) {
    let arr = [1, 2, 3, 4];
    (function(arr) {
        let result = arr.filter(function(item) {
            return item % 2 === 0;
        }, []);

        console.log("result", result);
    })([...arr]);
    flag = false;
}

/**
 * 异常处理版本
 */

function filter(callbackfn, thisArg) {
    if (this === null || this === undefined) {
        throw new TypeError("Connot read property filter of null or undefined");
    }

    if (Object.prototype.toString.call(callbackfn) !== "[object Function]") {
        throw new TypeError(callbackfn + " not a function");
    }

    let O = Object(this);
    let len = O.length >>> 0;
    let T = thisArg;
    let result = new Array();
    for (let i = 0; i < len; i++) {
        if (i in O) {
            let element = O[i];
            if (callbackfn(T, element, i, O)) {
                result.push(element);
            }
        }
    }

    return result;
}
