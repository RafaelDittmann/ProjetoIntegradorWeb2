const Creches = require("../models/models_nosql/creche");

module.exports = {
  async getCreate(req, res) {
    res.render("creche/crecheCreate");
  },
  async postCreate(req, res) {
    const { nome, bairro } = req.body;
    const creches = new Creches({ nome, bairro });
    await creches.save();
    res.redirect("/home");
  },
  async getList(req, res) {
    Creches.find().then((creches) => {
      res.render("creche/crecheList", {
        creches: creches.map((creches) => creches.toJSON()),
      });
    });
  },
  async getEdit(req, res) {
    await Creches.findOne({ _id: req.params.id }).then((creches) => {
      res.render("creche/crecheEdit", { creches: creches.toJSON() });
    });
  },
  async postEdit(req, res) {
    const { nome, bairro } = req.body;
    await Creches.findOneAndUpdate(
      { _id: req.body.id },
      { nome, bairro }
    );
    res.redirect("/crecheList");
  },
  async getDelete(req, res) {
    await Creches.findOneAndRemove({ _id: req.params.id });
    res.redirect("/crecheList");
  },
};
