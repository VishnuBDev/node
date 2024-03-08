const { readFileSync, writeFileSync } = require('fs');
const path = require('path')

const text1_path = path.resolve(__dirname, 'text1.txt')
console.log("start read sync")
const text1 = readFileSync(text1_path, 'utf8')
console.log(text1)//This is the text inside text1.txt file.
console.log("start write1 sync")

writeFileSync('./text2.txt', 'This is written to text2.txt file which didn\'t exist already')
//created a file in the given path with the content on it as the 2nd parameter.
console.log("start write2 sync")

for (let i = 0; i < 1000; i++) {
  writeFileSync('./text3.txt', `Hello ${i} \n`, { flag: 'a' })
}
//This will overwite the existing text on the file

console.log("start write3 sync")

//to prevent overwriting, we can user the third parameter
writeFileSync('./text2.txt', 'This will be appended to the existing text on the file', { flag: 'a' })
//This will overwite the existing text on the fileThis will be appended to the existing text on the file
console.log("end")