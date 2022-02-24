//constante "express" que importa o modulo express do node
const express = require("express")

//constante "app" que inicializa o express
const app = express()

//criação da rota, enviando uma resposta em texto
//se tentar enviar outro send na mesma rota dará erro
app.get("/",function(req,res){

res.send("bem vindo")

})

//criação da rota blog, enviando uma resposta em texto
app.get("/blog",function(req,res){

    res.send("bem vindo ao blog")
    
    })

//criação da rota canal, enviando uma resposta em texto
app.get("/canal",function(req,res){

    res.send("bem vindo ao canal")
    
    })

//chamando o servidor na porta 3000
app.listen(3000,function(erro){

if (erro){
console.log("servidor com erro")

}  else { 

console.log("servidor ok")
}

})