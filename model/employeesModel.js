import employeesModel from "../schema/employeesSchema.js";

export const getEmployees = () => {
  return employeesModel.find();
};

export const getEmployee = (id) => {
  return employeesModel.find(id);
};

export const createEmployee = (employeeObject) => {
  return employeesModel(employeeObject).save();
};

export const updateEmployee = (id, updatedEmployee) => {
  return employeesModel.findByIdAndUpdate(id, updatedEmployee);
};

export const deleteEmployee = (id) => {
  return employeesModel.findByIdAndDelete(id);
};
