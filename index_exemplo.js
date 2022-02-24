//constante "express" que importa o modulo express do node
const express = require("express")

//constante "app" que inicializa o express
const app = express()

//criação da rota, enviando uma resposta em texto
//se tentar enviar outro send na mesma rota dará erro
app.get("/",function(req,res){

res.send("bem vindo ao site")

})

//criação da rota blog, enviando uma resposta em texto com parametro opcional
app.get("/blog/:artigo?",function(req,res){

    //variavel artigo
    var artigo = req.params.artigo
    //se a variavel artigo for verdadeira mostre "tem artigo"
    if(artigo) {

        res.send("tem artigo")
        

    //se a variavel artigo vier vazia mostre o bem vindo....    
    } else {
    //res.send("bem vindo ao blog")
    //se não tem artigo ele redireciona
    res.redirect("http://www.uol.com.br")
}
    
})

//criação da rota canal, enviando uma resposta em texto
app.get("/canal/youtube",function(req,res){

    //cria variavel canal com array de "query" (http://localhost:3000/canal/youtube?canal=canal_do_sebo)
    var canal = req.query["canal"]
if(canal){

    res.send(canal)
}else{
    res.send("sem canal informado na URl")
}

    
})


//criação da rota canal, enviando uma resposta em texto
app.get("/ola/:nome/:empresa",function(req,res){

    //retorna o parametros passado na URL
    //res.send(req.params.nome)

    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Oi" + " "  + nome + " " + "da" + " "  + empresa + " </h1>")
    
})

//chamando o servidor na porta 3000
app.listen(3000,function(erro){

if (erro){
console.log("servidor com erro")

}  else { 

console.log("servidor ok")
}

})