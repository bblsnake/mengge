const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile);//1
const readDir = util.promisify(fs.readDir);
fs.readdir('./static', (err, files) => {
  console.log('files', files);
})
readDir('./static/').then(res => {
  console.log(res);
})

readFile('./index.js', 'utf-8')
.then(data => {
  // console.log('data-', data);
})//2

fs.readFile('./index.js', utf-8, (err, data) => {
  // console.log(data);
})
// fs.readFile().then();