import express from "express";
import fs from "fs";

const router =  express.Router()

// Abstração da leitura do arquivo
const readFile = () =>{
    const arquivo = fs.readFileSync('./db/dados.js', 'utf-8');
    return (JSON.parse(arquivo))
}

// Abstração de salvamento do arquivo
const saveFile = (arquivo) =>{
    const arquivoNovo = JSON.stringify(arquivo, null, 2)
    fs.writeFileSync('./db/dados.js', arquivoNovo, 'utf-8');
}

router.get("/home", (req, res) => {
    // Lendo o Arquivo
    const arquivo = readFile() 

    // Retornando os dados lidos no arquivo
    res.send(arquivo)
})

router.post("/adicionar", (req, res) => {
    // Recebendo os dados do body
    const { nome, email, apelido } = req.body 

    const arquivo = readFile()

    // Criando um identificador que possui letras e números
    const id = Math.random().toString(32).substring(2) 

    // Inserindo os dados passados do body
    arquivo.push({id, nome, email, apelido}) 

    // Salvando os novos dados no arquivo
    saveFile(arquivo) 

    res.send({id, nome, email, apelido})
})

router.put("/:id", (req, res) => {

    // Recebendo o id passado na url
    const { id } = req.params 

    const { nome, email, apelido } = req.body 
    const arquivo = readFile()

    // Verificação do id passado na url com o id existente no arquivo, se o id existir ele vai receber o valor do id
    const itemSelecionado = arquivo.findIndex((item) => item.id === id) 

    // Criando novas chaves para não dar conflito
    const {id: novoId, nome: novoNome, email: novoEmail, apelido: novoApelido } = arquivo[itemSelecionado] 

    // Criando esse objeto você garante que se apenas uma chave for modificada, o array não será setado e apenas conterá a chave modificada
    const novoObjeto = {

        // Se não existir nenhuma alteração na chave ela permanecerá do mesmo jeito
        id: novoId,
        name: nome ? nome: novoNome, 
        email: email ? email: novoEmail,
        apelido: apelido ? apelido: novoApelido
    } 

    // Atualizando os dados das chaves modificadas em seu respectivo id
    arquivo[itemSelecionado] = novoObjeto

    saveFile(arquivo)

    res.send(novoObjeto)
})

router.delete("/:id", (req, res) => {
    const { id } = req.params 
    const arquivo = readFile()
    const itemSelecionado = arquivo.findIndex((item) => item.id === id)

    // Excluindo/Deletando o item com o id passado para constante 'itemSelecionado' e adicionando quantos elementos serão deletados
    arquivo.splice(itemSelecionado, 1)

    saveFile(arquivo)
    res.send("Item deletado com sucesso!")
})

export default router