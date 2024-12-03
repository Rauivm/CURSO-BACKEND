const path = require('node:path')
const fs = require('node:fs')

const filePath = path.join(process.cwd(),'aula 01','texto.txt')
fs.readFile(filePath, {}, (erro,dados)=>{
    if(erro){
        console.log(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    console.log(dados.toString())
})
console.log(filePath)