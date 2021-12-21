require('./config/connection')

const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

const rotasTransferencia = require('./rotas')

app.use('/transferencias', rotasTransferencia)

app.listen(porta, ()=> {
    console.log('estamos on the line');
})