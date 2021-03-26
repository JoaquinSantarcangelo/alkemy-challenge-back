const express = require("express");

const login = async (req, res) => {
  console.log("Handleing Log in");
  const { email, pw } = req.body;
  console.log(email, pw);

  conn.query(
    "SELECT email FROM users WHERE email = ? AND password = ?",
    [email, pw],
    (err, user) => {
      if (err) {
        res.json({ err });
      } else {
        console.log(user);
        res.send("Added Successfully");
      }
    }
  );
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  console.log("Handleing Register");

  const data = { email, password, name };

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
