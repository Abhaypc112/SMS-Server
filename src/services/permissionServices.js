import { Permission } from "../models/permissionModel.js";
import CustomError from "../utils/customError.js";



export const createPermissions = async(permissionData) => {
    const { staffId, studentId, actions } = permissionData;
    const permission = await Permission.findOneAndUpdate(
        { staffId, studentId },
        { actions },
        { upsert: true, new: true }
    );
    if(!permission) throw new CustomError('Permission not assigned', 400);
    return permission;
}