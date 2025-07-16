import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  actions: { type: [String], default: [] },
}, { timestamps: true });

export const Permission = mongoose.model('Permission', permissionSchema);
