import express from "express";
import { connectToMongoDB } from "./config/dbConfig.js";
import employeesRouter from "./routes/employeesRouter.js";

const PORT = 3000;
const app = express();

app.use(express.json());

connectToMongoDB();

// Employees Routes
app.use("/api/v1/employees", employeesRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running successfully at http://localhost${PORT}`);
});
