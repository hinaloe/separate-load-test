
console.log('Init.');
const {noop} = require('./load-getter');
console.log('loaded modules');

noop('test');

console.log('重い方も試す');

const load = require('./load-getter');

console.log('1回目');
load.heavy('test1');
console.log('2回目');
load.heavy('test2');

const load2 = require('./load-getter');

console.log('3回目');
load2.heavy('test3');
console.log('4回目');
load2.heavy('test4');
console.log('end');