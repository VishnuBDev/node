const fs = require('fs')

const getFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

}

const asy = async () => {
  try {
    const f1 = await getFile('./text1.txt')
    const f2 = await getFile('./text2.txt')
    console.log(f1)
    console.log(f2)
  } catch (error) {
    console.log(error)
  }
}


console.log("start")
asy()
console.log("end")