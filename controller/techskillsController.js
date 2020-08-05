var db = require("../model/index");

module.exports = {
  getTechSkills: (req, res, next) => {
    db.techskills.findAll({}).then((data) => res.json({ data: data }));
  },
  getFrontEndSkills: (req, res, next) => {
    db.frontend.findAll({}).then((data) => res.json({ data: data }));
  },
  getBackEndSkills: (req, res, next) => {
    db.backend.findAll({}).then((data) => res.json({ data: data }));
  },
  getDatabaseSkills: (req, res, next) => {
    db.database.findAll({}).then((data) => res.json({ data: data }));
  },
  getLanguageSkills: (req, res, next) => {
    db.programming.findAll({}).then((data) => res.json({ data: data }));
  },
};
