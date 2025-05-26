const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/register">Form</a>
            </div>
        `)
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>About Page</h1>
            </div>
        `)
    }
    else if(req.url === "/contact"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>Contact Page</h1>
            </div>
        `)
    }
    else if(req.url === '/register'){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <form action='/success' method='POST'>
                    <input type='text' />
                    <input type='text' />
                    <input type='submit' />
                </form>
            </div>
        `)
    }
    else if(req.url === '/success' && req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end('<h1>Submitted</h1>')
    }
    else{
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>Page Not Found</h1>
            </div>
        `)
    }
})

server.listen(8080, () => {
    console.log('Server Running Successfully')
})