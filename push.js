Array.prototype.push = function(...addElements) {
    let O = Object(this);
    let len = O.length >>> 0;

    for (let i = 0; i < addElements.length; i++) {
        O[len + i] = addElements[i];
    }

    O.length = len + addElements.length;
};

Array.prototype.pop = function() {
    let O = Object(this);
    let len = O.length >>> 0;
    if (len === 0) {
        return undefined;
    }
    len--;
    let result = O[len];
    delete O[len];
    O.length = len;
    return result;
};

let flag = true;
while (flag) {
    let arr = [1, 2, 3];
    (function() {
        arr.push(4, 5, 6);
        console.log("push", arr);
    })([...arr]);

    (function() {
        var obj = {
            length: 0,

            addElem: function addElem(elem) {
                // obj.length is automatically incremented
                // every time an element is added.
                [].push.call(this, elem);
            }
        };

        // Let's add some empty objects just to illustrate.
        obj.addElem({});
        obj.addElem({});
        console.log(obj.length);
    })();

    (function() {
        var vegetables = ["parsnip", "potato"];
        var moreVegs = ["celery", "beetroot"];

        // 将第二个数组融合进第一个数组
        // 相当于 vegetables.push('celery', 'beetroot');
        Array.prototype.push.apply(vegetables, moreVegs);

        console.log(vegetables);
        // ['parsnip', 'potato', 'celery', 'beetroot']
    })();

    (function() {
        let myFish = ["angel", "clown", "mandarin", "surgeon"];

        let popped = myFish.pop();
        console.log(popped);
        console.log(myFish);

        popped = myFish.pop();
        console.log(popped);
        console.log(myFish);
    })();

    flag = false;
}
