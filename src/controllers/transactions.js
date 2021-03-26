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
  const { id } = req.params;
  console.log("Sending All Transactions to user, id: ", id);

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM transactions WHERE user_id = ?",
      [id],
      (err, transactions) => {
        if (err) {
          console.log(err)
          res.json(err);
        }
        console.log("Sent transactions: ", transactions);
        res.json(transactions);
      }
    );
  });
};

const getTransaction = async (req, res) => {};

//Add Transaction
const addTransaction = async (req, res) => {
  console.log("Adding new transaction");
  const data = req.body;
  console.log(data);

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO transactions set ?", data, (err, transaction) => {
      if (err) {
        res.json(err);
      }
      console.log(transaction);
      res.send("Added Successfully");
    });
  });
};

//Edit Transaction
const editTransaction = async (req, res) => {
  console.log("Editing transaction");
  const { id } = req.params;
  const data = req.body;

  console.log(id, data);

  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE transactions set ? WHERE id = ?",
      [data, id],
      (err, transaction) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(transaction);
          console.log("Edited!");
          res.send("Updated Successfully");
        }
      }
    );
  });
};

//Delete Transaction
const deleteTransaction = async (req, res) => {
  console.log("Deleting transaction");
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM transactions WHERE ID = ?",
      [id],
      (err, transaction) => {
        if (err) {
          res.json(err);
        } else {
          console.log(transaction);
          res.send("Deleted Successfully");
        }
      }
    );
  });
};

module.exports = {
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransaction,
};
