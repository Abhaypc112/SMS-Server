import catchAsync from "../utils/catchAsync.js";
import *as studentServices from "../services/studentServices.js";

export const createStudent = catchAsync(async(req,res) => {
    const student = await studentServices.createStudent(req.body);
    res.status(201).json({message:"sucess",data:student});
})
export const updateStudent = catchAsync(async(req,res) => {
    const { studentId } = req.params;
    const student = await studentServices.updateStudent(studentId,req.body);
    res.status(200).json({message:"sucess",data:student});
})
export const deleteStudent = catchAsync(async(req,res) => {
    const { studentId } = req.params;
    const student = await studentServices.deleteStudent(studentId);
    res.status(200).json({message:"sucess",data:student});
})
export const viewStudentById = catchAsync(async(req,res) => {
    const { studentId } = req.params;
    const student = await studentServices.viewStudentById(studentId);
    res.status(200).json({message:"sucess",data:student});
})
export const viewAllStudents = catchAsync(async(req,res) => {
    const student = await studentServices.viewAllStudents();
    res.status(200).json({message:"sucess",data:student});
})
