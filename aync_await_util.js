const { readFile, writeFile } = require('fs')
const util = require('util')

const readPromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile);



const asy = async () => {
  try {
    const f1 = await readPromise('./text1.txt', 'utf-8')
    const f2 = await readPromise('./text2.txt', 'utf-8')
    await writePromise('./text3.txt', `This is written to file 3 ${f1} and ${f2}`)
    const f3 = await readPromise('./text3.txt', 'utf-8')
    console.log(f1)
    console.log(f2)
    console.log(f3)
  } catch (error) {
    console.log(error)
  }
}


console.log("start")
asy()
console.log("end")
