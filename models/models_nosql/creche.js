const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Creches = Schema({
    nome: { type: String, required: true },
    bairro: { type: String, required: true }
});

module.exports = mongoose.model("Creches", Creches)