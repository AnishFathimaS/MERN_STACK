const express = require('express');
const app = express();

// Home Page Route
app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
});

// About Routes (Split into two valid routes)
app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

app.get('/about_page', (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

// Dynamic User ID Route
app.get('/user/:id', (req, res) => {
    res.status(200).send('<h1>User Id: ' + req.params.id + '</h1>');
});

// Contact Page with Form
app.get('/contact', (req, res) => {
    res.status(200).send(`
        <form action="/login" method="POST"> 
            <input type="submit" value="Login">
        </form>
    `);
});

// Login Route (POST)
app.post('/login', (req, res) => {
    res.status(200).send('<h1>Login Page</h1>');
});

// 404 Page - Catch All
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

// Start Server
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
