import catchAsync from "../utils/catchAsync.js";
import *as staffServices from "../services/staffServices.js";


export const createStaff = catchAsync(async(req,res) => {
    const staff = await staffServices.createStaff(req.body);
    res.status(201).json({message:"sucess",data:staff});
})
export const updateStaff = catchAsync(async(req,res) => {
    const { staffId } = req.params;
    const staff = await staffServices.updateStaff(staffId, req.body);
    res.status(201).json({message:"sucess",data:staff});
})
export const deleteStaff = catchAsync(async(req,res) => {
    const { staffId } = req.params;
    const staff = await staffServices.deleteStaff(staffId);
    res.status(201).json({message:"sucess",data:staff});
})
export const getStaffById = catchAsync(async(req,res) => {
    const { staffId } = req.params;
    const staff = await staffServices.getStaffById(staffId);
    res.status(201).json({message:"sucess",data:staff});
})
export const getAllStaff = catchAsync(async(req,res) => {
    const staff = await staffServices.getAllStaff();
    res.status(201).json({message:"sucess",data:staff});
})