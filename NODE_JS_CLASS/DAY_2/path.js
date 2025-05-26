// const path = require('path')

// const filepath = path.join('assets')
// const filepath = path.join('assets', 'images')
// const filepath = path.join('assets', 'images', 'img.jpg')

// console.log(filepath);

// const path = require('path')

// const filepath = path.join(__dirname)
// const filepath = path.join(__dirname, 'assets')
// const filepath = path.join(__dirname, 'assets', 'images')
// const filepath = path.join(__dirname, 'assets', 'images', 'img.jpg')

// console.log(filepath);

// const path = require('path')

// const filepath = path.extname('example.html')
// const filepath = path.extname('img.png')

// console.log(filepath);

// const http = require('http')
// const file = require('fs')
// const path = require('path')

// const filepath = path.join(__dirname, 'index.html')

// file.writeFileSync(filepath, '<h1>Hello</h1>')

// const content = file.readFileSync(filepath, 'utf8')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html')
//     res.end(content)
// })

// server.listen(8080)

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end('<h1>Home Page</h1>')
    }
    else if(req.url === '/form'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(
        `
            <form action='/submit' method='POST'>
                <input type='text' required  />
                <input type='submit' />
            </form>
        `)
    }
    else if(req.url === '/submit' && req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end('<h1>Form Submitted Successfully</h1>')
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html')
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(5000, () => {
    console.log('Server Running on http://localhost:5000')
})