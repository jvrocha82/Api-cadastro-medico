const conexao = require('../infraestrutura/conexao')


class Medico {
    adiciona(medico, res) {
        const dataCriacao = new Date()
        const medicoDatado = { ...medico, dataCriacao }
        const sql = 'INSERT INTO medico SET ?'

        conexao.query(sql, medicoDatado, (erro, resultados) => {

            if (erro) {
                res.status(400).json(erro);

            } else {
                res.status(201).json(resultados)
            }
        })
    }
    lista(res) {
        const sql = 'SELECT * FROM medico WHERE ativo = 1'
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    busca(id, res) {
        const sql = `SELECT * FROM medico WHERE id=${id} AND ativo= 1`
        conexao.query(sql, (erro, resultados) => {
            const medico = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(medico)
            }

        })
    }
    altera(id, valores, res) {
        const sql = 'UPDATE medico Set ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
    deletar(id, res) {
        const sql = 'UPDATE medico Set ativo=false WHERE Id=?'
        conexao.query(sql, [id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }


}
module.exports = new Medico;