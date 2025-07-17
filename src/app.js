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


app.use(cors({ 
  origin:"https://sms-client-prsr.vercel.app",
  credentials:true
})); 


app.use('/api',authRoutes);
app.use('/api',studentRoutes);
app.use('/api',staffRoutes); 
app.use('/api',permissionRoutes); 

app.use(errorHandler);