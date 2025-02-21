import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running successfully at http://localhost${PORT}`);
});
