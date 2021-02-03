const Medico = require('../models/medico')
module.exports = server => {



    server.get('/', (req, res) => {
        Medico.lista(res)
    })
    server.get('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Medico.busca(id, res)
    })
    server.post('/', (req, res) => {
        const medico = req.body
        Medico.adiciona(medico, res)

    })
    server.put('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const medico = req.body
        Medico.altera(id, medico, res)
    })
    server.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Medico.deletar(id, res)
    })



}