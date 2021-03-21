const express = require("express");

const login = async (req, res) => {
  console.log("Handleing Log in");
  const { email, pw } = req.body;

  console.log(email, pw);
};

const register = async (req, res) => {
  const { email, password, firstName } = req.body;
  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

module.exports = {
  login,
  register,
};
