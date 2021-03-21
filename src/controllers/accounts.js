const express = require("express");

const login = async (req, res) => {
  console.log("Handleing Log in");
  const { email, pw } = req.body;

  res.send("Ok");

  console.log(email, pw);
};

const register = async (req, res) => {
  const { email, pw, name } = req.body;
  console.log("Handleing Register");

  console.log(email, pw, name);
};

module.exports = {
  login,
  register,
};
