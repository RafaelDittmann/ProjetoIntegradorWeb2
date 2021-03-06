const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerReceita = require('../controllers/controllerReceita');
const controllerCreche = require('../controllers/controllerCreche');
const controllerAlunos = require('../controllers/controllerAlunos');
const multer = require('multer');
const route = express.Router();

module.exports = route;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads/")
    },
    filename: (req, file, cb) => {
      req.imageName = req.body.nome+'.png'
      cb(null,  req.imageName)
    },
  })
const upload = multer({storage})

route.get("/home",function(req,res){
    res.render('home');
});
route.get("/logout", controllerUsuario.getLogout);

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);
//Usuario - CRUD
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);

//Controller Receita
//Receita-CRUD

/*
route.get("/receitaCreate", controllerReceita.getCreate);
route.post("/receitaCreate",upload.single('imagem'),controllerReceita.postCreate);
route.get("/receitaList", controllerReceita.getList);
route.get("/receitaEdit/:id", controllerReceita.getEdit);
route.post("/receitaEdit",upload.single('imagem'),controllerReceita.postEdit);
route.get("/receitaDelete/:id", controllerReceita.getDelete);
*/

//Controller Creche
//Creche-CRUD
route.get("/crecheCreate", controllerCreche.getCreate);
route.post("/crecheCreate",controllerCreche.postCreate);
route.get("/crecheList", controllerCreche.getList);
route.get("/crecheEdit/:id", controllerCreche.getEdit);
route.post("/crecheEdit",controllerCreche.postEdit);
route.get("/crecheDelete/:id", controllerCreche.getDelete);


//Controller alunos
//Creche-CRUD
route.get("/alunoCreate", controllerAlunos.getCreate);
route.post("/alunoCreate",upload.single('residencia'),controllerAlunos.postCreate);
route.get("/alunoList", controllerAlunos.getList);
route.get("/alunoEdit/:id", controllerAlunos.getEdit);
route.post("/alunoEdit",upload.single('residencia'),controllerAlunos.postEdit);
route.get("/alunoDelete/:id", controllerAlunos.getDelete);