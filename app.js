//requerimos la variable con el framwork de express
var express = require('express');
//iniciamos el framwork express
var app = express();
//aqui conectarmos el http como server
  var server = require('http').Server(app);
//aqui conectarmos la libreria de socket.io
var io = require ('socket.io')(server);
//ponemos una ruta estatica para las imagenes javascrip y css
app.use(express.static('asset'));

//enlazamos ruta jade en vez de html
app.set("view engine","jade");
app.get('/',function (req,res) {
res.render("index");
});
//mandar por el metodo post la parte de contacto
app.post("/menu",function (req,res) {
      console.console.log(req);
});
//enlazamos la ruta a las paginas
app.get("/menu/layaout", function(req, res){
res.render("menu/layaout");
});
//enlazamos con la pagina de contacto
app.get("/menu/contact", function(req, res){
res.render("menu/contact");
});
//enlazamos con la pagina de contacto
app.get("/menu/cotizaciones", function(req, res){
res.render("menu/cotizaciones");
});
//enlazamos con la pagina de contacto
app.get("/menu/services", function(req,res){
res.render("menu/services");
});
//enlazamos con la pagina de contacto
app.get("/menu/clientes", function(req,res){
res.render("menu/clientes");
});
//damos de alta la ruta para la pagina panel
app.post("/admin",function(req,res){
  res.render("admin/panel");
});
app.get("/admin", function(req,res){
  res.render("panel");
});

app.get("/admin",function(req,res){
  res.render("soporte");
});
//damos de alta la ruta para la pagina services
app.post("/services",function(req,res){
  console.console.log(req)
});
app.get("/services",function(req,res){
    res.render("services_alta");
});
//escucha el puerto en el que se abrira
app.listen(8080,function() {
    console.log("Servidor corriendo en http://localhost:8080");
});
