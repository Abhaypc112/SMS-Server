import *as permissionServices from '../services/permissionServices.js';
import catchAsync from '../utils/catchAsync.js';

export const createPermissions = catchAsync(async(req,res) => {
    const permission = await permissionServices.createPermissions(req.body);
    res.status(201).json({message:"sucess",data:permission});
})