import express from "express";
import { connectToMongoDB } from "./config/dbConfig.js";
import {
  createEmployee,
  getEmployee,
  getEmployees,
} from "./model/employeesModel.js";

const PORT = 3000;
const app = express();

app.use(express.json());

connectToMongoDB();

// GET | INDEX
app.get("/api/v1/getEmployees", async (req, res) => {
  res.json(await getEmployees());
});

// GET | SHOW
app.get("/api/v1/getEmployee/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getEmployee(id));
});

// CREATE
app.post("/api/v1/createEmployee", async (req, res) => {
  res.json(await createEmployee(req.body));
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running successfully at http://localhost${PORT}`);
});
