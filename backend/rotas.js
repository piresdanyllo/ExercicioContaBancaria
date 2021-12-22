const rotas = require('express').Router()

const conexao = require('./config/connection')

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});


rotas.get('/', (req, res) => {
    let sql = 'select * from tb_transferencia'
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    let sql = `select * from tb_transferencia where id_transferencia = ${id}`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req, res) => {
    const {
        id
    } = req.params
    let sql = `delete from tb_transferencia where id_transferencia = ${id}`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({
            status: 'transferencia excluida com sucesso'
        })
    })
})

rotas.post('/', urlencodedParser, (req, res) => {
    const {
        nomeCliente,
        valor,
        contaCliente
    } = req.body
    let sql = `insert into tb_transferencia(nomeCliente,valor,contaCliente) values('${nomeCliente}',${valor},${contaCliente})`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({
            status: 'transferencia adicionada com sucesso'
        })
    })
})

rotas.put('/:id', urlencodedParser, (req, res) => {
    const {
        id
    } = req.params
    const {
        nomeCliente,
        valor,
        contaCliente
    } = req.body
    let sql = `update tb_transferencia set nomeCliente = '${nomeCliente}', valor = ${valor}, contaCliente = ${contaCliente} where id_transferencia = ${id}`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({
            status: 'transferencia atualizada com sucesso'
        })
    })
})

module.exports = rotas