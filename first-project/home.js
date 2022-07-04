let x1 = 10;
let y1 = 5;
let x2 = 2;
let y2 = 3;
let segmentX;
let segmentY;

segmentX = Math.abs(x2 - x1);
segmentY = Math.abs(y2 - y1);

console.log(segmentX * segmentY);

///////////////////////
// HUITA

let a = 1.45;
let b = .0022;
let n = 5;

console.log(Math.round(Math.pow(10, n) * (a - Math.trunc(a))));
console.log(Math.round(Math.pow(10, n) * (b - Math.trunc(b))));
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

///////////////////////

let n = 0;
let m = 100;

let Rnum = Math.floor(Math.random() * (Math.abs(m - n) + 1) ) + Math.min(n, m);
if(Rnum % 2 === 0 ? console.log(++Rnum) : console.log(Rnum));