const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alunos = Schema({
    nome: { type: String, required: true },
    pais: { type: String, required: true },
    endereco: { type: String, required: true },
    residencia: { type: String, required: true },
});

module.exports = mongoose.model("Alunos", Alunos)