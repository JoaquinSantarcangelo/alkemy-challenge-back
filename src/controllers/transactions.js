const express = require("express");

const transactions = [
  {
    desc: "Monotributo",
    amount: 255.2,
    type: "outbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Impuesto a las ganancias",
    amount: 55.52,
    type: "inbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Juego en Steam",
    amount: 1255.2,
    type: "outbound",
    category: "fun",
    date: new Date(),
  },
  {
    desc: "Mc Donalds Combo Triple Queso",
    amount: 555,
    type: "outbound",
    category: "food",
    date: new Date(),
  },
  {
    desc: "Ibuprofeno 400 2mg",
    amount: 155,
    type: "outbound",
    category: "health",
    date: new Date(),
  },
  {
    desc: "Monotributo",
    amount: 255.2,
    type: "outbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Impuesto a las ganancias",
    amount: 55.52,
    type: "inbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Juego en Steam",
    amount: 1255.2,
    type: "outbound",
    category: "fun",
    date: new Date(),
  },
  {
    desc: "Mc Donalds Combo Triple Queso",
    amount: 555,
    type: "outbound",
    category: "food",
    date: new Date(),
  },
  {
    desc: "Ibuprofeno 400 2mg",
    amount: 155,
    type: "outbound",
    category: "health",
    date: new Date(),
  },
  {
    desc: "Monotributo",
    amount: 255.2,
    type: "outbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Impuesto a las ganancias",
    amount: 55.52,
    type: "inbound",
    category: "taxes",
    date: new Date(),
  },
  {
    desc: "Juego en Steam",
    amount: 1255.2,
    type: "outbound",
    category: "fun",
    date: new Date(),
  },
  {
    desc: "Mc Donalds Combo Triple Queso",
    amount: 555,
    type: "outbound",
    category: "food",
    date: new Date(),
  },
  {
    desc: "Ibuprofeno 400 2mg",
    amount: 155,
    type: "outbound",
    category: "health",
    date: new Date(),
  },
];

const getAllTransactions = async (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM transactions", (err, transactions) => {
      if (err) {
        res.json(err);
      }
      console.log("Sent transactions: ", transactions);
      res.json(transactions);
    });
  });
};

const getTransaction = async (req, res) => {};

const addTransaction = async (req, res) => {
  const data = req.body;
  console.log(data);

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO transactions set ?", data, (err, transaction) => {
      if (err) {
        res.json(err);
      }
      console.log(transaction);
      res.send("Works");
    });
  });
};

const editTransaction = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

const deleteTransaction = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

module.exports = {
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransaction,
};
