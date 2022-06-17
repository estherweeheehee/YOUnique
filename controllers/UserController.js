const express = require("express");
const User = require("../models/User");

const router = express.Router();


router.get("/", async (req, res) => {
    res.send("success")
})

router.post("/signup", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        res.send(error);
    }
  });

// router.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     if (username === "admin" && password === "123") {
//       req.session.user = "admin"; //? create the session & store the cookie
//       console.log("Login session", req.session.user)
//       res.send({ status: "success", data: { name: "admin", id: "aaa"}} );
//     } else {
//       res.send({ status: "error"})
//     }
//   });

module.exports = router;