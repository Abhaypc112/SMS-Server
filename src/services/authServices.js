import { User } from "../models/userModel.js";
import CustomError from "../utils/customError.js";
import bcrypt from 'bcrypt';
import { genarateAccessToken } from "../utils/jsonwebtoken.js";

export const doLogin = async(loginData) => {
    const {email, password} = loginData;
    const user = await User.findOne({email});
    if(!user) throw new CustomError('Invalid username or password',404);
    const verifyPassword = bcrypt.compare(password, user.password);
    if(!verifyPassword) throw new CustomError("Invalid username or password",401);
    const accessToken = await genarateAccessToken(user.email, user.role, user.permissions);
    return {
            name:user.name,
            role:user.role,
            permissions:user.permissions,
            accessToken
        }
} 

// const demo = async() => {
//     const password = await bcrypt.hash("123456",10)
//     return await User.create({email:'admin@gmail.com',name:"Admin",role : "admin", password, role:"admin", permissions:['view', 'edit', 'delete', 'create']})
// }
 

// demo()