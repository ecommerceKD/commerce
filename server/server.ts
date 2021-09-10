import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connect } from "mongoose"

import routes from './src/routes'

const app = express();
const port = process.env.PORT || 8980;

async function run(): Promise<void> {
    await connect('mongodb://localhost:27017/ecommerce-alpha')
    console.log("Banco conectado")
}
run().catch(err => console.log(err))


app.use(cors());
app.use(cookieParser());
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
