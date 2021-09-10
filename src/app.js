const express = require('express');
const app = express();
const port = 3000;

const main = require('./routers/main');
const about = require('./routers/about');


app.use(express.static('public'))

app.use('/',main)
app.use('/about',about)

app.listen(port, ()=>{
    console.log('Servidor funcionando ' + port); 
});