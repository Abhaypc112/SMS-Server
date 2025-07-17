import express from 'express';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import { errorHandler } from './middlewares/errorMiddleware.js';
import studentRoutes from './routes/studentRoutes.js';
import staffRoutes from './routes/staffRoutes.js';
import permissionRoutes from './routes/permissionRoutes.js';
import dotenv from 'dotenv';
export const app = express();
dotenv.config();

app.use(express.json());

if(process.env.NODE_ENV === 'production'){
  app.use(cors({
      origin:"https://sms-client-prsr.vercel.app/",
      credentials:true
    })); 
}else{
  app.use(cors({
      origin:"http://localhost:5173",
      credentials:true
    })); 
}

app.use('/api',authRoutes);
app.use('/api',studentRoutes);
app.use('/api',staffRoutes); 
app.use('/api',permissionRoutes); 

app.use(errorHandler);