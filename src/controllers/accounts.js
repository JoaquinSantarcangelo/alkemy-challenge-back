const express = require("express");
const pool = require("../database/db");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
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
