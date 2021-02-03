const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
const customExpress = require('./config/customExpress')
const server = customExpress()
const cors = require('cors') 
server.use(cors())
conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        tabelas.init(conexao)
        server.listen(3001, () => console.log('Rodando na porta 3001'))
    }
})



