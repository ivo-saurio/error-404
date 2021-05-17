const express = require('express');
const app = express();
const path = require('path')

//ROUTES

const errorRouter = require('./routes/error');

app.use('/', errorRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})