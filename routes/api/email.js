const router = require("express").Router();
const emailController = require("../../controller/emailController");

router.post("/", emailController.sendEmail);
module.exports = router;
