import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const genarateAccessToken = async(userId, role, permissions) => {
    const payload = {userId, role, permissions};
    return jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: '7d'});
}
export const verifyAccessToken = async(accessToken) => {
    try{
        return jwt.verify(accessToken, JWT_SECRET_KEY);
    }catch(error){
        throw new CustomError('Invalid or expired access token',401);
    }
}