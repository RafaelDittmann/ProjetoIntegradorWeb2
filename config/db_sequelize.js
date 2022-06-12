const { port } = require('pg/lib/defaults');
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('web2_dbs', 'postgres', 'masterkey', {
    host: 'localhost',
    dialect: 'postgres',
    port : 5432
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/models_postgres/usuario.js')(sequelize, Sequelize);
module.exports = db;

