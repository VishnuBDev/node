const path = require('path')
const abs_path = path.resolve(__dirname,"var.js");
console.log("abs path : ", abs_path)
// abs path :  C:\Users\207063\Desktop\react\spare\API\var.js

const alt = __dirname +  "/var.js";

console.log(alt)