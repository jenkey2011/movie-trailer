const fs = require('fs')

// // 回调函数
// function readFile (cb) {
//   fs.readFile('./package.json', (err, data) => {
//     if (err) return cb(err)

//     cb(null, data)
//   })
// }

// readFile((err, data) => {
//   if (!err) {
//     data = JSON.parse(data)

//     console.log(data.name)
//   }
// })



// // Promise
// function readFilePromise(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }

// readFilePromise('./package.json')
//   .then(data => {
//     data = JSON.parse(data)

//     console.log(data.name)
//   })
//   .catch(err => {
//     console.log(err)
//   })


// // general 

// const co = require('co')
// const util = require('util')

// co(function *() {
//   let data = yield util.promisify(fs.readFile)('./package.json')

//   data = JSON.parse(data)

//   console.log(data.name)
// })


// Async 
const util = require('util')
const readAsync = util.promisify(fs.readFile)

async function init () {
  let data = await readAsync('./package.json')

  data = JSON.parse(data)

  console.log(data.name)
}

init() 