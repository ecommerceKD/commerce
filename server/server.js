const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8980;

//CONEXÃO MONGOOSE
    mongoose.connect('mongodb://localhost:27017/ecommerce-alpha', {
        useUnifiedTopology: true,
        useNewUrlParser:true,
        // useFindAndModify:false
    }, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("Banco conectado")
        }
    })

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
