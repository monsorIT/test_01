let mat = require('date-format');

let time = mat('hh:mm:ss', new Date());
let t = mat('dd/MM/yyyy', new Date());
console.log(t);
console.log(time);