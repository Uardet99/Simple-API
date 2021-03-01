const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use((request, response, next) => {
    console.log(`Nueva petición ${new Date().toISOString()}`); 
    next();
});
app.get('/date', (request, response) => {
    const date = new Date();
    response.send(date);
});
app.get('/pepe', (request, response) => {
    const message = 'Hello world';
    response.send(message);
});
app.listen(2021);
