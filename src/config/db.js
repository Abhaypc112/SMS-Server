import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async() => {
    try{
        const connect = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected : ${connect.connection.host}`);
    }catch(error){
        console.log(error);
    }
}