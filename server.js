require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");

const usersController = require("./controllers/UsersController");

const app = express();
const port = process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017/YOUnique" 

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))
app.use(express.static("./frontend/dist"))
app.use("/api/users", usersController);

app.get("/api", (req, res) => {
    res.send("hello world")
})

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.thml"));
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})