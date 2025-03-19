import express from 'express';
import dotenv from "dotenv";

dotenv.config(); //able to see MONGO_URI content on terminal

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("Server is ready123");
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:" + PORT);
});