import express from "express";
import { configDotenv } from "dotenv";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/db.js";
import cors from "cors";

configDotenv();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: "http://localhost:5174" }));
connectDB(); // Connect to DB

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running"); // route handler
});
app.use("/api/auth", authRoute);
app.listen(port, () => console.log(`server running on port ${port}`));
