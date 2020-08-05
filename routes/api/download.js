const router = require("express").Router();
const downloadController = require("../../controller/downloadController");

router.get("/:filename", downloadController.download);
module.exports = router;
