

// var http = require('http')

// http.createServer(function (req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>hello</h1>
//     <a href="https://www.flipkart.com">flipkart</a>
// </body>
// </html>`)
// }).listen(3000,()=>{
//   console.log('http://localhost:3000')
// })





// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   if (req.url === '/' || req.url === '/home') {
//     const filePath = path.join(__dirname, 'home.html');

//     fs.readFile(filePath, (err, content) => {
//       if (err) {
//         res.writeHead(500);
//         res.end('Error loading HTML file');
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//       }
//     });
//   } else {
//     res.writeHead(404);
//     res.end('Page Not Found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });








// const http = require('http')
// const readPage = require('./controller/readpage')

// const server = http.createServer((req, res) => {
//     if (req.url === '/' || req.url === '/home') {
//         readPage('home.html', res)
//     } else if (req.url === '/about') {
//         readPage('about.html', res)
//     } else {
//         res.writeHead(404)
//         res.end("Page not found")
//     }
// })

// server.listen(3000, () => {
//     console.log("Server Started at http://localhost:3000")
// })






// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//   const q = url.parse(req.url, true).query;
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`You searched for: ${q.search}`);
// }).listen(3000,()=>{
//   console.log('http://localhost:3000')
// });








// const http = require('http');

// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';

//     req.on('data', chunk => {
//       console.log(chunk.toString())
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       const formData = new URLSearchParams(body);
//       console.log(formData)
//       const name = formData.get('name');
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`Received: ${name}`);
//     });
//   } 
  
//   else {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <form method="POST">
//         <input type="text" name="name" placeholder="Enter your name" />
//         <button type="submit">Submit</button>
//       </form>
//     `);
//   }
// }).listen(3000,()=>{
//    console.log('http://localhost:3000')
// });





// server.js


// const http = require('http');

// const PORT = 3000;

// const server = http.createServer(async (req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     try {
//       const response = await fetch('https://api.adviceslip.com/advice');
//       const data = await response.json();
//       const advice = data.slip.advice;

//       res.writeHead(200, { 'Content-Type': 'Text/plain' });
//       res.end( advice);
//     } catch (error) {
//       res.writeHead(500, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Failed to fetch advice.' }));
//     }
//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Route not found' }));
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// const http = require('http')

// const server=http.createServer(async(req,res)=>{
//   if(req.url=='/'&& req.method=='GET'){
//     try{
//       const response = await fetch('https://api.adviceslip.com/advice')
//       const data = await response.json()
//       const advice = data.slip.advice
//       console.log(data)

//       res.writeHead(200,{'Content-type':'Text/plain'})
//       res.end(advice)
//     }
//     catch(error){
//       res.writeHead(400,{'Content-type':'Text/plain'})
//       res.end('Error While fetching data')
//     }
//   }
//   else{
//     res.writeHead(404,{'Content-type':'Text/plain'})
//       res.end('Page Not found')
//   }
// })

// server.listen(3000,()=>{
//   console.log("http://localhost:3000")
// })



// https://api.adviceslip.com/advice




// const http = require('http')

// const server = http.createServer(async(req,res)=>{
//     if(req.url==='/'){
//       const response = await fetch('https://api.adviceslip.com/advice')
//       const data = await response.json()

//       console.log(data)

//       res.writeHead(200,{'content-type':'text/plain'})
//       res.end(data.slip.advice)
//     }
// })

// server.listen(3000,()=>{
//   console.log('http://localhost:3000')
// })