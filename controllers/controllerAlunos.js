const Aluno = require("../models/models_nosql/aluno");

module.exports = {
  async getCreate(req, res) {
    res.render("aluno/alunoCreate");
  },
  async postCreate(req, res) {
    const { nome, pais, endereco, residencia } = req.body;
    const imagem = req.imageName;
    console.log(imagem);
    const alunos = new Aluno({ nome, pais, endereco, residencia });
    await alunos.save();
    res.redirect("/home");
  },
  async getList(req, res) {
    Aluno.find().then((alunos) => {
      res.render("aluno/alunoList", {
        alunos: alunos.map((alunos) => alunos.toJSON()),
      });
    });
  },
  async getEdit(req, res) {
    await Aluno.findOne({ _id: req.params.id }).then((alunos) => {
      res.render("aluno/alunoEdit", { alunos: alunos.toJSON() });
    });
  },
  async postEdit(req, res) {
    const { nome, pais, endereco, residencia } = req.body;
    const imagem = req.imageName;
    console.log(imagem);
    await Aluno.findOneAndUpdate(
      { _id: req.body.id },
      { nome, pais, endereco, residencia }
    );
    res.redirect("/alunoList");
  },
  async getDelete(req, res) {
    await Aluno.findOneAndRemove({ _id: req.params.id });
    res.redirect("/alunoList");
  },
};
