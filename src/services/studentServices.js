import { Permission } from "../models/permissionModel.js";
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
export const viewAllStudents = async(staffData) => {
    const {userId, role} = staffData;
    if(role === 'admin'){
        const students = await Student.find();
        if(!students) throw new CustomError('Student not found',400);
        return students;
    }else{
        const permissions = await Permission.find({
            staffId: userId,
            actions: { $in: ['read'] }
        }).select('studentId');
        const studentIds = permissions.map(p => p.studentId);
        const students = await Student.find({ _id: { $in: studentIds } });
        if(!students) throw new CustomError('Student not found',400);
        return students;
    }
}