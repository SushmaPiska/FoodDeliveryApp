import express from 'express'
import dotenv from "dotenv"
import userRouter from './routes/user.routes.js'
import foodDealRouter from './routes/foodDeal.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import cors  from 'cors'

dotenv.config({path:'./backend/.env'});

const app=express()
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/auth",userRouter)
app.use("/api/deals",foodDealRouter)
app.use(cors())


const corsOptions ={
    origin:'http://localhost:5000', 
    credentials:false, 
    optionSuccessStatus:200
}
app.use(cors(corsOptions))


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT} `)
})
