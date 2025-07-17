import *as permissionServices from '../services/permissionServices.js';
import catchAsync from '../utils/catchAsync.js';

export const createPermissions = catchAsync(async(req,res) => {
    const permission = await permissionServices.createPermissions(req.body);
    res.status(201).json({message:"sucess",data:permission});
})
export const getAllPermissions = catchAsync(async(req,res) => {
    const permission = await permissionServices.getAllPermissions();
    res.status(201).json({message:"sucess",data:permission});
})
export const deletePermissions = catchAsync(async(req,res) => {
    const {permissionId} = req.params;
    const permission = await permissionServices.deletePermission(permissionId);
    res.status(201).json({message:"sucess",data:permission});
})
export const getStaffPermissionById = catchAsync(async(req,res) => {
    const {userId} = req.user;
    const permission = await permissionServices.getStaffPermissionById(userId);
    res.status(201).json({message:"sucess",data:permission});
})
