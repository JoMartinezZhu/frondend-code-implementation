//

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log(i, "=====>", arr);
    }
}

// function bubbleSort(arr) {
//     let i = arr.length,
//         j;
//     let tempExchangVal;
//     while (i > 0) {
//         for (j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 tempExchangVal = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tempExchangVal;
//             }
//         }
//         i--;
//     }
// }

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

bubbleSort(arr);

console.log(arr);
