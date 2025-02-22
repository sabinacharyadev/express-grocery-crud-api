import mongoose from "mongoose";

const customersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  money_spent: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  join_date: {
    type: Number,
    required: true,
  },
});

const customersModel = mongoose.model("customer", customersSchema);
export default customersModel;
