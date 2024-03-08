const { readFile, writeFile } = require('fs').promises



const asy = async () => {
  try {
    const f1 = await readFile('./text1.txt', 'utf-8')
    const f2 = await readFile('./text2.txt', 'utf-8')
    await writeFile('./text3.txt', `This is written to file 3 ${f1} and ${f2}`)
    const f3 = await readFile('./text3.txt', 'utf-8')
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
