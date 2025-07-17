import express from 'express';
import { adminAuth } from '../middlewares/adminAuth.js';
import { createPermissions, deletePermissions, getAllPermissions, getStaffPermissionById } from '../controllers/permissionController.js';
import { userAuth } from '../middlewares/userAuth.js';

const permissionRoutes = express.Router();

permissionRoutes.post('/permission/create-permission', adminAuth, createPermissions);
permissionRoutes.get('/permission/get-all-permissions', adminAuth, getAllPermissions);
permissionRoutes.delete('/permission/delete-permission/:permissionId', adminAuth, deletePermissions);
permissionRoutes.get('/permission/get-permission-by-id', userAuth, getStaffPermissionById);

export default permissionRoutes;