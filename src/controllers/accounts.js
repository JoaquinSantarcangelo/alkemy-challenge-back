const express = require("express");

const login = async (req, res) => {
  console.log("Handleing Log in");
  const { email, pw } = req.body;

  res.send("Ok");

  console.log(email, pw);
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);
  console.log("Handleing Register");

  const data = { email, password, name };

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO users set ?", data, (err, user) => {
      if (err) {
        res.err(err)
      } else {
        console.log(user);
        res.send("Added Successfully");
      }
    });
  });
};

module.exports = {
  login,
  register,
};
