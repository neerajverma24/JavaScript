
var a = [1, 2, 3].length;
console.log("Length", a)

var b = [1, 2, 3].push(4);
console.log("With Push", b);

var c = [1, 2, 3].unshift(0);
console.log("Unshift", c);

var d = [1, 2, 3].pop();
console.log('pop', d)

var e = [1, 2, 3].shift()
console.log('Shift', e)

var f = [1, 2, 3].at(1);
console.log('At', f)

var g = [1, 2, 3].indexOf(2);
console.log('indexOf', g)

var h = [1, 2, 3].includes(2);
console.log('Includes', h)  // true

var i = [1, 2, 3].map((num) => {
    return num * 5;
});
console.log("map", i);  // output : (3) [5, 10, 15]

var j = [1, 2, 3].filter((num) => {
    if (num === 2) {
        console.log("Number found by filter method", num);
    }
});

var k = [1, 2, 3].every((num) => {
    return num > 2;
});
console.log('Every', k)  //  false

var l = [1, 2, 3].some((num) => {
    return num > 4
})
console.log('some', l)  // false


var m = [1, 2, 3].fill(10)
console.log('fill', m)  // (3) [10, 10, 10]

var n = [1, 2, 3].reduce((acc, val) => {
    // return acc + val // output : 6;

    return acc + val + 5 // output : 16 , dont know why!
});
console.log('reduce', n);

var o = [1, 2, 3].concat(4, 5);
console.log('concat', o)  // (5) [1, 2, 3, 4, 5]

var p = [1, 2, 3].reverse();
console.log('reverse', p);


var q = [1, 2, 3, 5, 6, 7, 4].sort();
console.log('sort', q)  // (7) [1, 2, 3, 4, 5, 6, 7]

var r = [1, 2, 3].join('-');
console.log("Join", r)  //  1-2-3

var s = [1, 2, 3, [4], [5]].flat();
console.log('flat', s); //  (5) [1, 2, 3, 4, 5]


var t = [1, 2, 3].find((num, i) => {
    // return num == 4     // undefined
    // return num == 1      // 1

    return i == 2;  // output is 3
    // i represents the index number of an array..

});
console.log('find', t)  // 3


var u = [1, 2, 3].findIndex((num) => num == 2);
console.log('findIndex', u)  // output : 1
// we can find index directly by using findIndex method

var v = [1, 2, 3].toString();
console.log('toString : ', v)  //   1,2,3

var w = [1, 2, 3, 4, 5, 6].slice(2, 5);
console.log('slice', w); // output : (4)  [3, 4, 5]
// here, we are getting out the array between the index 2 to 5

var x = [0, 1].splice(1, 0, 2, 3);
console.log("splice", x);

var y = Array.isArray("[1,2,3]");
console.log("isArray", y)  // output : false

var z = Array.from("1234");
console.log("Array from", z);  // (4) ['1', '2', '3', '4']
