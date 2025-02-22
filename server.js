import express from "express";
import { connectToMongoDB } from "./src/config/dbConfig.js";
import employeesRouter from "./src/routes/employeesRouter.js";
import customersRouter from "./src/routes/customersRouter.js";

const PORT = 3000;
const app = express();

app.use(express.json());

connectToMongoDB();

// Employees Routes
app.use("/api/v1/employees", employeesRouter);

// Customers Routes
app.use("/api/v1/customers", customersRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running successfully at http://localhost${PORT}`);
});
