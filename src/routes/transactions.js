const { Router } = require("express");
const router = Router();
const transactionsController = require("../controllers/transactions");

router.get("/", transactionsController.getAllTransactions);
router.get("/:id", transactionsController.getTransaction);
router.post("/", transactionsController.addTransaction);
router.put("/:id", transactionsController.editTransaction);
router.delete("/:id", transactionsController.deleteTransaction);

module.exports = router;
