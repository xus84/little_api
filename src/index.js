import express from "express";
import IndexRoutes from "./routes/index";


const app = express();

app.set("port", process.env.PORT || 2020);

app.get("/", (req, res) => {
  res.json({ message: "hello bots" });
});

app.use(IndexRoutes);

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

