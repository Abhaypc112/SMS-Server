import express from 'express';
import { adminAuth } from '../middlewares/adminAuth.js';
import { createStaff, deleteStaff, getAllStaff, getStaffById, updateStaff } from '../controllers/staffControllers.js';
const staffRoutes = express.Router();

staffRoutes.post('/staff/create-staff',adminAuth,createStaff);
staffRoutes.patch('/staff/update-staff/:staffId',adminAuth,updateStaff);
staffRoutes.delete('/staff/delete-staff/:staffId',adminAuth,deleteStaff);
staffRoutes.get('/staff/get-staff/:staffId',adminAuth,getStaffById);
staffRoutes.get('/staff/get-staffs',adminAuth,getAllStaff);

export default staffRoutes;