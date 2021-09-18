import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import routes  from './src/routes'
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connect } from "mongoose"
import passport from "passport";
import strategyLocal from "./src/auth/strategy.auth"


const app = express();
dotenv.config()

const port = process.env.PORT || 8980;

async function run(): Promise<void> {
    await connect(process.env.MONGO_CONNECT)
    console.log("Banco conectado")
}
run().catch(err => console.log(err))

strategyLocal(passport)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
app.use(cookieParser())
app.use(passport.initialize());
// app.use(passport.session())

app.use(routes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})