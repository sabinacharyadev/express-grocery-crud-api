import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../model/employeesModel.js";

const employeesRouter = express.Router();

// GET | INDEX
employeesRouter.get("/", (req, res) => {
  getEmployees()
    .then((employees) => {
      res.json({
        status: "Success",
        data: employees,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot get employees",
      });
    });
});

// GET | SHOW
employeesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  getEmployee(id)
    .then((employee) => {
      res.json({
        status: "Success",
        data: employee,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot get employee",
      });
    });
});

// CREATE
employeesRouter.post("/", (req, res) => {
  createEmployee(req.body)
    .then((employee) => {
      res.json({
        status: "Success",
        data: employee,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot create employee",
      });
    });
});

// UPDATE
employeesRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  updateEmployee(id, req.body)
    .then((employee) => {
      res.json({
        status: "Success",
        data: employee,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot update employee",
      });
    });
});

// DELETE
employeesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteEmployee(id)
    .then((employee) => {
      res.json({
        status: "Success",
        data: employee,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot delete employee",
      });
    });
});

export default employeesRouter;
