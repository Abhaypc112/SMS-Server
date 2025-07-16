import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email : {type : String, required : true, unique : true},
        name : {type : String, required : true},
        role : {type : String, enum: ['admin', 'staff'], default:"staff"},
        password : {type : String, required : true},
        isActive :{type : Boolean, default : true}
    },
    { timestamps: true }
);

export const User = mongoose.model('User',userSchema); 