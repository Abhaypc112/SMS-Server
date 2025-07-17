import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const createStaff = async(staffData) => {
    const {email, password, name} = staffData;
    const hashPassword = await bcrypt.hash(password,10);
    const staff = await User.create({email, name, password:hashPassword});
    if(!staff) throw new CustomError('Staff not created',400);
    return {
        _id : staff._id,
        name : staff.name,
        email : staff.email,
        permissions : staff.permissions,
        role : staff.role,
        isActive : staff.isActive
    };
}
export const updateStaff = async(staffId, staffData) => {
    const {email, password, name, isActive, permissions, role} = staffData;
    let hashPassword;
    if(password) hashPassword = await bcrypt.hash(password,10);
    const staff = await User.findByIdAndUpdate(staffId, {email, name, password:hashPassword, isActive, permissions, role});
    if(!staff) throw new CustomError('Staff not updated',400);
    const updatedData = await User.findById(staffId);
     return {
        _id : updatedData._id,
        name : updatedData.name,
        email : updatedData.email,
        permissions : updatedData.permissions,
        role : updatedData.role,
        isActive : updatedData.isActive
    };
}
export const deleteStaff = async(staffId) => {
    const staff = await User.findByIdAndDelete(staffId);
    if(!staff) throw new CustomError('Staff not deleted',400);
     return {
        _id : staff._id,
        name : staff.name,
        email : staff.email,
        permissions : staff.permissions, 
        role : staff.role,
        isActive : staff.isActive
    };
}
export const getStaffById = async(staffId) => {
    const staff = await User.findById(staffId);
    if(!staff) throw new CustomError('Staff not found',400);
     return {
        _id : staff._id,
        name : staff.name,
        email : staff.email,
        permissions : staff.permissions,
        role : staff.role,
        isActive : staff.isActive
    };
}
export const getAllStaff = async() => {
    const staff = await User.find({role:'staff'}).select('name email permissions role isActive');
    if(!staff) throw new CustomError('Staffs not found',400);
    return staff;
}