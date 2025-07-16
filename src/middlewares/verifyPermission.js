import { Permission } from "../models/permissionModel.js";

export const verifyPermission = (action) => {
  return async (req, res, next) => {
    const user = req.user;
    const {studentId} = req.params;

    if (user.role === 'admin') return next();
    console.log(user.userId, studentId)
    const perm = await Permission.findOne({
      staffId: user.userId,
      studentId: studentId
    });

    if ( perm && perm.actions.includes(action)) {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden' });
  };
};