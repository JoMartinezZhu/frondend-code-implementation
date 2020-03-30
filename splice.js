function sliceDeleteElements(array, startIndex, deleteCount, deleteArray) {
    for (let i = 0; i < deleteCount; i++) {
        let index = startIndex + i;
        if (index in array) {
            let current = array[index];
            deleteArray[i] = current;
        }
    }
}

function movePostElements(array, startIndex, len, deleteCount, addElements) {
    // 删除的元素 和 添加的元素 相等
    // 删除的元素 比 添加的元素 多 ==> 后面元素向前移动
    // 删除的元素 比 添加的元素 少
    if (deleteCount === addElements.length) {
        return;
    }

    if (deleteCount > addElements.length) {
        // 删除的元素比新增的元素多，那么后面的元素整体向前移动
        // 一共需要移动 len - (deleteCount+startIndex))
        for (let i = startIndex + deleteCount; i < len; i++) {
            let fromIndex = i;
            let toIndex = i - (deleteCount - addElements.length);

            if (fromIndex in array) {
                array[toIndex] = array[fromIndex];
            }
        }

        for (let i = len - 1; i >= len + addElements.length - deleteCount; i--) {
            delete array[i];
        }
    } else {
        for (let i = len - 1; i >= startIndex + deleteCount; i--) {
            let fromIndex = i;
            let toIndex = i + (addElements.length - deleteCount);
            if (fromIndex in array) {
                array[toIndex] = array[fromIndex];
            }
        }
    }
}

function computeStartIndex(startIndex, len) {
    if (startIndex < 0) {
        return startIndex + len < 0 ? 0 : startIndex + len;
    }
    return startIndex < len ? startIndex : len;
}

Array.prototype.splice = function(startIndex, deleteCount, ...addElements) {
    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'splice' of null or undefined");
    }

    if (Object.prototype.toString.call(this) !== "[object Array]") {
        throw new TypeError(this + " is not a Array");
    }

    let array = this;

    let len = array.length >>> 0;

    let deleteArray = new Array(deleteCount);
    startIndex = computeStartIndex(startIndex, len);
    // 拷贝删除的元素
    sliceDeleteElements(array, startIndex, deleteCount, deleteArray);
    // 移动删除元素后面的元素
    movePostElements(array, startIndex, len, deleteCount, addElements);

    for (let i = 0; i < addElements.length; i++) {
        array[startIndex + i] = addElements[i];
    }

    array.length = len - deleteCount + addElements.length;

    return deleteArray;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("before arr ", arr);

let deleteElements = arr.splice(9, 2, "a", "b", "c");

console.log("after arr ", arr);
// console.log("deleteElements ", deleteElements);
