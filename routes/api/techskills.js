const router = require("express").Router();
const techskillsController = require("../../controller/techskillsController");

router.route("/").get(techskillsController.getTechSkills);
router.route("/frontEnd").get(techskillsController.getFrontEndSkills);
router.route("/backEnd").get(techskillsController.getBackEndSkills);
router.route("/database").get(techskillsController.getDatabaseSkills);
router.route("/programming").get(techskillsController.getLanguageSkills);
module.exports = router;
