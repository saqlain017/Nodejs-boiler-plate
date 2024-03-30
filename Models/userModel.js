import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
      employeeId: { type: String, required: true, unique: true },
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      doj: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
      contact: { type: String, required: true },
      jobTitle: { type: String, required: true },
      department: { type: String, required: true },
      salary: { type: Number, required: true },
      employeeStatus: {
        type: String,
        enum: ['Active', 'On Leave', 'Terminated'],
        required: true,
      },
      emergencyContact: {
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phone: { type: String, required: true },  
      },
    },
    { timestamps: true }
  );
export const userModel = new mongoose.model("employee",employeeSchema)