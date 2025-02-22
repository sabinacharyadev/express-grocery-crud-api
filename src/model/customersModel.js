import customersModel from "../schema/customersSchema.js";

export const getCustomers = () => {
  return customersModel.find();
};

export const getCustomer = (id) => {
  return customersModel.findById(id);
};

export const createCustomer = (customerObject) => {
  return customersModel(customerObject).save();
};

export const updateCustomer = (id, updatedCustomer) => {
  return customersModel.findByIdAndUpdate(id, updatedCustomer);
};

export const deleteCustomer = (id) => {
  return customersModel.findByIdAndDelete(id);
};
