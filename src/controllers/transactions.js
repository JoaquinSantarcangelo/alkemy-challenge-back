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
];

const getAllTransactions = async (req, res) => {
  try {
    res.json(transactions);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

const getTransaction = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

const addTransaction = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
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
