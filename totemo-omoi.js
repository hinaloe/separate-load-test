const {sleep} = require('sleep');

sleep(10);
console.log('loaded totemo-omoi');
module.exports = function(...args){
    console.log(args);
};