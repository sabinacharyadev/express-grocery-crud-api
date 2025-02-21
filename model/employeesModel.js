import employeesModel from "../schema/employeesSchema";

export const getEmployees = () => {
  employeesModel.find();
};

export const getEmployee = (id) => {
  employeesModel.find(id);
};

export const createEmployee = (employeeObject) => {
  employeesModel(employeeObject).save();
};

export const updateEmployee = (id, updatedEmployee) => {
  employeesModel.findByIdAndUpdate(id, updatedEmployee);
};

export const deleteEmployee = (id) => {
  employeesModel.findByIdAndDelete(id);
};
