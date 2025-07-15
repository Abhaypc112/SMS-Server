import express from 'express';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
export const app = express();

app.use(express.json());


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
  })); 

app.use('/api',authRoutes);