const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request: ok')
  const content = fs.readFileSync(`./public/index.html`)
  res.end(content)
})

port = process.env.PORT || 3000
server.listen(port)

console.log(`Server started on port ${port}!`)
