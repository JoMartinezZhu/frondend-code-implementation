const sliceDeleteElements = (array, startIndex, deleteCount, deleteArr) => {
    for (let i = 0; i < deleteCount; i++) {
        let index = startIndex + i;
        if (index in array) {
            let current = array[index];
            deleteArr[i] = current;
        }
    }
};

const movePostElements = (array, startIndex, len, deleteCount, addElements) => {
    if (deleteCount === addElements.length) return;

    // 如果添加的元素和删除的元素个数不相等，则移动后面的元素
    if (deleteCount > addElements.length) {
        // 删除的元素比新增的元素多，那么后面的元素整体向前挪动
        // 一共需要挪动 len - startIndex - deleteCount 个元素
        for (let i = startIndex + deleteCount; i < len; i++) {
            let fromIndex = i;
            // 将要挪动到的目标位置
            let toIndex = i - (deleteCount - addElements.length);
            if (fromIndex in array) {
                array[toIndex] = array[fromIndex];
                console.log("array: ", array);
            }
            // else {
            //     delete array[toIndex];
            // }
        }
        // 注意注意！这里我们把后面的元素向前挪，相当于数组长度减小了，需要删除冗余元素
        // 目前长度为 len + addElements - deleteCount
        for (let i = len - 1; i >= len + addElements.length - deleteCount; i--) {
            delete array[i];
        }
    }
};

Array.prototype.splice = function(startIndex, deleteCount, ...addElements) {
    let argumentsLen = arguments.length;
    let array = Object(this);
    let len = array.length >>> 0;
    let deleteArr = new Array(deleteCount);

    // 拷贝删除的元素
    sliceDeleteElements(array, startIndex, deleteCount, deleteArr);
    // 移动删除元素后面的元素
    movePostElements(array, startIndex, len, deleteCount, addElements);

    // 插入新元素
    for (let i = 0; i < addElements.length; i++) {
        array[startIndex + i] = addElements[i];
    }

    array.length = len - deleteCount + addElements.length;

    return deleteArr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("before arr ", arr);

let deleteElements = arr.splice(1, 3, "a");

console.log("after arr ", arr);
console.log("deleteElements ", deleteElements);
