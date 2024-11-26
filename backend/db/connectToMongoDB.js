import mongoose from 'mongoose';
import dotenv from  "dotenv"

dotenv.config()
const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,{
            serverSelectionTimeoutMS:30000
        })
        console.log("connected to mongoDB")
    } catch (error) {
        console.log("Error connecting to mongoDB: " , error.message)
    }
    
}
export default connectToMongoDB;