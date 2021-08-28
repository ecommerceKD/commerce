const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 8900; 

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
