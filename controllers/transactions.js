const express = require("express");

const getAllTransactions = async (req, res) => {
  try {
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
