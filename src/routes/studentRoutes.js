import express from 'express';
import { userAuth } from '../middlewares/userAuth.js';
import { verifyPermission } from '../middlewares/verifyPermission.js';
import { createStudent, deleteStudent, updateStudent, viewAllStudents, viewStudentById } from '../controllers/studentControllers.js';

const studentRoutes = express.Router();

studentRoutes.post('/student/create-student',userAuth,verifyPermission('create'),createStudent);
studentRoutes.patch('/student/update-student/:studentId',userAuth,verifyPermission('update'),updateStudent);
studentRoutes.delete('/student/delete-student/:studentId',userAuth,verifyPermission('delete'),deleteStudent);
studentRoutes.get('/student/view-student/:studentId',userAuth,viewStudentById);
studentRoutes.get('/student/view-students',userAuth,viewAllStudents);

export default studentRoutes;