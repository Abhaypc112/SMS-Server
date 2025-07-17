import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        name : {type : String, required : true},
        profileImg : {type : String},
        age : {type : Number, required : true},
        grade : {type : String, required : true},
        contactInfo : {type : String, required : true},
        isActive : {type : Boolean, default:true}
    },
    { timestamps: true }
);

export const Student = mongoose.model('Student',studentSchema); 