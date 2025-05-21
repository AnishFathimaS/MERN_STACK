const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode  = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`
                <div>
                    <a href='/' >Home</a>
                    <a href='/about' >About</a>
                    <a href='/contact' >Contact</a>

                    <button>
                        <a href='/form' >Register</a>
                    </button>
                </div>
            `)
    }
    else if(req.url === '/about'){
        res.statusCode  = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`
            <div>
                <h1>About Page</h1>
            </div>
        `)
    }
    else if(req.url === '/contact'){
        res.statusCode  = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`
            <div>
                <h1>Contact Page</h1>
            </div>
        `)
    }
    else if(req.url === '/form'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`
            <div>
                <form action="/submit" method="POST">
                    <h1>REGISTER FORM</h1>
                    <label>Enter First Name</label>
                    <input value="Anis" type="text" name="username">
                    <button>Submit</button>
                </form>
            </div>
        `)
    }
    else if(req.url === '/submit       '){
        res.statusCode  = 200;
        res.setHeader('Content-type', 'text/html');
        
        let value = '';

        req.on((a) => {
            value = querystring.parse(a.toString());

            
        })
    }
    else{
        res.statusCode  = 404;
        res.setHeader('Content-type', 'text/html');
        res.end(`
            <center>
                <h1>Page Not Found</h>
            </center>
        `)
    }
})

server.listen(8080)