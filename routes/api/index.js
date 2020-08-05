const router = require("express").Router();
const download = require("./download.js");
const techskills = require("./techskills.js");
const email = require("./email.js");

router.use("/download", download);
router.use("/techskills", techskills);
router.use("/sendEmail", email);

module.exports = router;
