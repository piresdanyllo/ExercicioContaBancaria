const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cigarro@123",
    port: 3306,
    database: "db_conta_corrente"
})

conexao.connect((erro) =>{
    if (erro)throw erro
    console.log('estamos conectados com a database')
})

module.exports = conexao