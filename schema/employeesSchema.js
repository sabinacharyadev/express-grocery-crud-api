import e from "express";
import mongoose from "mongoose";

const employeesSchema = mongoose.Schema({
  employee_name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  join_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  address: {
    type: String,
    required: true,
  },
});

const employeesModel = mongoose.model("employee", employeesSchema);
export default employeesModel;
