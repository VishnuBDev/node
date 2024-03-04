const ld = require('loadash')
const ar = [1,2,[3,4],[5,[6,[7]]]]
console.log(ar)
const fl_ar = ld.flattenDeep(ar)
console.log(fl_ar)