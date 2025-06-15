import express from "express";
import { configDotenv } from "dotenv";
import authRoute from "./routes/auth.route.js";
configDotenv();
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running"); // route handler
});
app.use("/api/auth", authRoute);
app.listen(port, () => console.log(`server running on port ${port}`));
