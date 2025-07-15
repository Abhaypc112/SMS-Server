import express from 'express';
import { doLogin } from '../controllers/authControllers.js';

const authRoutes = express.Router();

authRoutes.post('/auth/login', doLogin);

export default authRoutes;