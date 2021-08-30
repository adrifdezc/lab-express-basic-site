//1. We have to require Express so we can use it in our app.
const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/home',(request,response,next) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about',(request,response,next) => response.sendFile(__dirname + '/views/about-page.html'));
app.get('/works',(request,response,next) => response.sendFile(__dirname + '/views/works-page.html'));
app.get('/gallery',(request,response,next) => response.sendFile(__dirname + '/views/gallery-page.html'));


app.listen(3000, () => console.log('Listening on port 3000!'))

