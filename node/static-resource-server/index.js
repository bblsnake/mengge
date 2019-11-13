const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  // console.log(req.url);
  const reqUrl = req.url;
  if (/^\/static\//.test(reqUrl)) {
    staticServer(req, res);
    return false;
  }
  fs.readFile('./index.html', 'binary', (err, file) => {
    res.write(file, 'binary'),
    res.end();
  })
})
.listen(9090, () => {
  console.log('server is running 9090');
});
function staticServer(req, res) {
  const reqUrl = req.url;
  //static/demo.jpg
  //static/tianshi.jpg
  const filePath = path.join(__dirname, reqUrl);
  fs.exists(filePath, exists => {
    if (!exists) {
      res.writeHead(404);
      res.end();
      return false;
    }
    fs.readFile(filePath, 'binary', (err, file) => {
      res.write(file, 'binary');
      res.end();
    })
  })
}