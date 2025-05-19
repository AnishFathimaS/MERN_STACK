const path = require('path')
const fs = require('fs')

function readPage(fname, res) {
    const filepath = path.join(__dirname, '..', fname)  
    //  console.log(__dirname)
    fs.readFile(filepath, (err, content) => {
        if (err) {
            res.writeHead(500)
            res.end('Error While loading Html')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        }
    })
}

module.exports = readPage