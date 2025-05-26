const http = require('http')

const server = http.createServer((req, res) => {
    try{
        if(req.url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html')
            res.end(
                `
                    <div>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                    </div>

                    <h1>Home Page</h1>
                `
            )
        }
        else if(req.url === '/about'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html')
            res.end(
                `
                    <div>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                    </div>

                    <h1>About Page</h1>
                `
            )
        }
        else if(req.url === '/error'){
            throw new Error('Something Went Wrong')
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html')
            res.end('Page Not Found')
        }
    }
    catch(err){
        res.statusCode = 500;
        res.end(`<h1>Alert : ${err.message}</h1>`)
    }
})

server.listen(5000)