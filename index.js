import express from "express"
import router from "./routes/routes.js";
import cors from "cors"
import DBConnection from "./db/db.js";
import dotenv from "dotenv"

dotenv.config();

const Port = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use('/',router)

app.get('/',(req,res)=>{
    res.send("Hello")
})

//connection
DBConnection()

app.listen(Port,()=>{
   console.log(`server is running at: http://localhost:${Port}`)
})