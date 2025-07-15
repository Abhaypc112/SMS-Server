import catchAsync from "../utils/catchAsync.js";
import *as authServices from '../services/authServices.js';

export const doLogin = catchAsync(async(req, res) => {
    const userData = await authServices.doLogin(req.body);
    res.status(200).json({message:"sucess",data:userData})
});