const path = require('node:path')
const fs = require('node:fs')

const filePath = path.join(process.cwd(),'aula 01','texto.txt')
const fileOutPath = path.join(process.cwd(), 'aula 01','texto-com-linhas.txt')
console.log(filePath)

console.time('leitura do arquivo')
console.time('manipular arquivo')
fs.readFile(filePath, {}, (erro,dados)=>{
    if(erro){
        console.error(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    console.timeEnd('leitura do arquivo')

    const texto = dados.toString()
    const linhas = texto.split('\n')

    const linhasAjustadas = linhas.map((Linha, index, arrayDeLinhas) =>
        `${index + 1} - ${Linha}`)
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro)=>{
        if(erro){
            console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
            return
        }
    console.timeEnd('manipular arquivo')
    })
})