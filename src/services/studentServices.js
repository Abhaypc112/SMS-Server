import { Student } from "../models/studentModel.js"
import CustomError from "../utils/customError.js";

export const createStudent = async(userData) => {
    const student = await Student.create(userData);
    if(!student) throw new CustomError('Student not created',400);
    return student;
}
export const updateStudent = async(studenId, userData) => {
    const student = await Student.findByIdAndUpdate(studenId, userData);
    if(!student) throw new CustomError('Student not updated',400);
     const updatedData = await Student.findById(studenId);
    return updatedData;
}
export const deleteStudent = async(studenId) => {
    const student = await Student.findByIdAndDelete(studenId);
    if(!student) throw new CustomError('Student not deleted',400);
    return student;
}
export const viewStudentById = async(studenId) => {
    const student = await Student.findById(studenId);
    if(!student) throw new CustomError('Student not found',400);
    return student;
}
export const viewAllStudents = async(studenId) => {
    const student = await Student.find();
    if(!student) throw new CustomError('Student not found',400);
    return student;
}