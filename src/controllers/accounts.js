const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  console.log("Handleing Log in");
  const { email, password } = req.body;
  console.log(email, password);

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, user) => {
        if (err) {
          res.json({ err });
        } else {
          if (user.length > 0) {
            if (await bcrypt.compare(password, user[0].password)) {
              console.log("User logged");
              res.status(200).send("User Logged");
            } else {
              console.log("Credentials dont match");
              res.status(500).send("Credentials dont match");
            }
          } else {
            console.log("Credentials not found");
            res.status(500).send("Credentials not found");
          }
        }
      }
    );
  });
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  console.log("Handleing Register");

  let hashedPassword = await bcrypt.hash(password, 8);

  const data = { email, password: hashedPassword, name };

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT email FROM users WHERE email = ?",
      email,
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          if (user.length <= 0) {
            console.log("No hay un usuario registrado");
            conn.query("INSERT INTO users set ?", data, (err, user) => {
              if (err) {
                res.json({ err });
              } else {
                console.log(user);
                res.status(200).send("Usuario Registrado");
              }
            });
          } else {
            console.log("Ya hay un usuario registrado");
            res.status(500).send("Ya hay un usuario registrado");
          }
        }
      }
    );
  });
};

module.exports = {
  login,
  register,
};
