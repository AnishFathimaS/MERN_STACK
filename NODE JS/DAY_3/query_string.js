const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(
            `
                <div>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <a href='/form'>Register</a>
                </div>
            `
        )
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(
            `
                <div>
                    <h1>About Page</h1>
                </div>
            `
        )
    }
    else if(req.url === '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(
            `
                <div>
                    <h1>Contact Page</h1>
                </div>
            `
        )
    }
    else if(req.url === '/form'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.end(
            `
                <form action='/submit' method='POST'>
                    <input type='text' name='username' required>
                    <input type='text' name='password' required>
                    <input type='submit' >
                </form>
            `
        )
    }
    else if(req.url === '/submit' && req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')

        var value = ''

        req.on('data', (a) => {
            value = querystring.parse(a.toString())
            console.log(value);

            res.end(
                `
                    <h1>Username : ${value.username}</h1>
                    <h1>Password : ${value.password}</h1>
                `
            )
        })
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html')
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(8080, () => {
    console.log('Server Running')
})