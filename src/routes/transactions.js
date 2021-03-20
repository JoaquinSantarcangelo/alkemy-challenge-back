const { Router } = require("express");
const router = Router();
const transactionsController = require("../controllers/transactions");

router.get("/", transactionsController.getAllTransactions);
router.get("/:id", transactionsController.getTransaction);
router.post("/", transactionsController.addTransaction);
router.put("/", transactionsController.editTransaction);
router.delete("/", transactionsController.deleteTransaction);

module.exports = router;
