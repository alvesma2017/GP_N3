//constante "express" que importa o modulo express do node
const express = require("express")

//constante "app" que inicializa o express
const app = express()

//chamando o servidor na porta 3000
app.listen(3000,function(erro){

if (erro){
console.log("servidor com erro")

}  else { 

console.log("servidor ok")
}

})