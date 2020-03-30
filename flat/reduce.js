let arr = [1, [2, [3, [4, 5]]], 6, { a: 1, b: function() {}, c: ["4", "5", "6"], d: { d: 123 } }];

function flat(sourceArray = []) {
    return sourceArray.reduce((result, item) => {
        if (Array.isArray(item)) {
            return result.concat(flat(item));
        } else {
            // result.push(item);
            return result.concat(item);
        }
    }, []);
}

function flatPro(sourceArray = []) {
    return sourceArray.reduce((result, item) => result.concat(Array.isArray(item) ? flatPro(item) : item), []);
}

// const result = flat(arr);
const result = flatPro(arr);
console.log("reduce result", result);
