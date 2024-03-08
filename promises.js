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

getFile('./text1.txt').then((result)=>console.log(result)).catch((error)=>console.log(error))
getFile('./text2.txt').then((result)=>console.log(result)).catch((error)=>console.log(error))
