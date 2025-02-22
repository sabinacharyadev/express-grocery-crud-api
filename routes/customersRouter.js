import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../model/customersModel.js";

const customersRouter = express.Router();

// GET | INDEX | READ
customersRouter.get("/", (req, res) => {
  getCustomers()
    .then((customers) => {
      res.json({
        status: "Success",
        data: customers,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: "Failed to get customers",
      });
    });
});

// GET | SHOW
customersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  getCustomer(id)
    .then((customer) => {
      res.json({
        status: "Success",
        data: customer,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot get customer",
      });
    });
});

// CREATE
customersRouter.post("/", (req, res) => {
  createCustomer(req.body)
    .then((customer) => {
      res.json({
        status: "Success",
        data: customer,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot create customer",
      });
    });
});

// UPDATE
customersRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  updateCustomer(id, req.body)
    .then((customer) => {
      res.json({
        status: "Success",
        data: customer,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot update customer",
      });
    });
});

// DELETE
customersRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteCustomer(id)
    .then((customer) => {
      res.json({
        status: "Success",
        data: customer,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error || "Cannot delete customer",
      });
    });
});
export default customersRouter;
