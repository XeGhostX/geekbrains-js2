const http = require('http')
const fs = require('fs')

const static_dir = './public'
const server = http.createServer((req, res) => {
  url = req.url
  if(url == '/') {
    url = '/index.html'
  }
  console.log(`${req.method} ${url}`)

  try {
    const content = fs.readFileSync(static_dir + url)
    res.end(content)  
  } catch (err) {
    res.statusMessage = 'Not found';
    res.statusCode = 404;
    res.end(); 
  }
})

port = process.env.PORT || 3000
server.listen(port)

console.log(`Server started on port ${port}!`)
