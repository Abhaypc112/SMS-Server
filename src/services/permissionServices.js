import { Permission } from "../models/permissionModel.js";
import CustomError from "../utils/customError.js";



export const createPermissions = async(permissionData) => {
    const { staffId, studentId, actions } = permissionData;
    console.log(permissionData)
    const permission = await Permission.findOneAndUpdate(
        { staffId, studentId },
        { $set: { actions } },
        { upsert: true, new: true, runValidators: true }
  )
    .populate('staffId', '_id name')
    .populate('studentId', '_id name');
    if(!permission) throw new CustomError('Permission not assigned', 400);
    return permission;
}
export const getAllPermissions = async() => {
    const permission = await Permission.find()
    .populate('staffId', '_id name')
    .populate('studentId', '_id name')
    if(!permission) throw new CustomError('Permission not found', 400);
    return permission;
}
export const deletePermission = async(permissionId) => {
    const permission = await Permission.findByIdAndDelete(permissionId)
    .populate('staffId', '_id name')
    .populate('studentId', '_id name')
    if(!permission) throw new CustomError('Permission not deleted', 400);
    return permission;
}
