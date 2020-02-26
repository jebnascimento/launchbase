//------dependencias para esse projeto-----//

// npm init -y
// npm install express
// npm install -D nodemon (-D para indicar que é uma dependência de desenvolvimento)
// npm install nunjucks  

//npm init -> inicia um projeto
//express -> instala as dependencias necessárias para trabalharmos com servidor
// nodemon -> reinicia o servidor toda vez que houver alterações no código
//nunjucks -> template engine, um motor que trabalha com templates para reuso de código



//server.get("/", function(req, res){})
//req - request
//res - response
//"servidor pegue(get) essa '/' e execute essa função 'function'"
//fique escutando: se o usuário(client) enviar alguma coisa, vai estar dentro do req
//a partir da requisição, responda(response) algo pra esse usuário.




const express = require('express') 
const nunjucks = require('nunjucks')

const server = express() 


//o servidor fica olhando essa pasta 'public' 
//para servir os arquivos estáticos
//antes como todos os arquivos estavam
//no mesmo diretório, o live-server fazia todo
//esse gerenciamento pra gente, agora estamos criando
//nosso próprio servidor. 
server.use(express.static('public'))


//configurando template engine, motor de view(tudo que for html)
server.set("view engine", "njk")

//views -> pasta onde está os arquivos de visualização
//options {} -> em formato de objeto, pois será uma lista 
nunjucks.configure("views", {
  express: server//diz o que está usando o express e a variável utilizada

})

server.get("/", function(req, res){
  return res.render("about")//send é uma método do objeto res
})

server.get("/videos", function(req, res){
  return res.render("videos")//send é uma método do objeto res
})



server.listen(5000, function(){
  console.log('server is running')
})
