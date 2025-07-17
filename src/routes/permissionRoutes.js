import express from 'express';
import { adminAuth } from '../middlewares/adminAuth.js';
import { createPermissions, deletePermissions, getAllPermissions } from '../controllers/permissionController.js';

const permissionRoutes = express.Router();

permissionRoutes.post('/permission/create-permission', adminAuth, createPermissions);
permissionRoutes.get('/permission/get-all-permissions', adminAuth, getAllPermissions);
permissionRoutes.delete('/permission/delete-permission/:permissionId', adminAuth, deletePermissions);

export default permissionRoutes;