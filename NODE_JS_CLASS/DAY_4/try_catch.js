const http = require('http')

const server = createServer((req, res) => {
    try{
        if(req.url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html')
            res.end('<h1>Welcome to Home Page</h1>') 
        }
        else if(req.url === '/error'){
            throw new Error('Something went wrong...')
        }
    }
    catch(err){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(`<h1>Error</h1> <p>${err.message}</p>`)
    }
})