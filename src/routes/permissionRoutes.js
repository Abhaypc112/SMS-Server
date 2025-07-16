import express from 'express';
import { adminAuth } from '../middlewares/adminAuth.js';
import { createPermissions } from '../controllers/permissionController.js';

const permissionRoutes = express.Router();

permissionRoutes.post('/permission/create-permission', adminAuth, createPermissions);

export default permissionRoutes;