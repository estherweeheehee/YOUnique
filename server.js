require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static("./frontend/dist"))

app.get("/api", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})