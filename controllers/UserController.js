const express = require("express");
const { rawListeners } = require("../models/User");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("success");
});

router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUser = await User.findOne({
      username: username,
      password: password,
    });
    req.session.username = username;
    res.send(checkUser);
  } catch (error) {
    res.send(error);
  }
  // if (username === "admin" && password === "123") {
  //   req.session.user = "admin"; //? create the session & store the cookie
  //   console.log("Login session", req.session.user)
  //   res.send({ status: "success", data: { name: "admin", id: "aaa"}} );
  // } else {
  //   res.send({ status: "error"})
  // }
});

router.get("/view/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.get("/mypurchase/:id", async (req, res) => {
  const { id } = req.params;
  if (!req.session.username) {
    res.send({status: "fail", data: "No access"});
  } else {
        try {
        const users = await User.find({ "sales_order_one_off.buyerId": id });

        const result = [];
        users.forEach((element) => {
            element["sales_order_one_off"].forEach((item) => {
            if (item["buyerId"] === id) {
                result.push(item);
            }
            });
        });
        res.send(result);
        } catch (error) {
        res.send(error);
        }
  }
});

router.put("/settings/:id", async (req, res) => {
    const { id } = req.params;
    if (!req.session.username) {
        res.send({status: "fail", data: "No access"});
    } else {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            res
              .send(updatedUser);
          } catch (error) {
            res.send(error);
          }
    }
    
  });

module.exports = router;
