const { Router } = require("express");
const router = Router();
const accountsController = require("../controllers/accounts");

router.post("/login", accountsController.login);
router.post("/register", accountsController.register);

module.exports = router;
