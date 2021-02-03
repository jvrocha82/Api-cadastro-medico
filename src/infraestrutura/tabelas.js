class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelas()
    }
    criarTabelas() {
        const medico = 'CREATE TABLE IF NOT EXISTS medico (id int NOT NULL AUTO_INCREMENT,nome varchar(120) NOT NULL,CRM int , telefoneFixo varchar(40),dataCriacao datetime NOT NULL, telefoneCelular varchar(40),CEP varchar(20),endereco varchar(120), numero int,cidade varchar(120),estado varchar(120),Especialidade varchar(50),ativo boolean DEFAULT true, PRIMARY KEY(id) )'
       // const especialidades = 'CREATE TABLE IF NOT EXISTS especialidades (id int NOT NULL AUTO_INCREMENT, nome varchar(120),dataCriacao datetime NOT NULL, ativo boolean DEFAULT true, PRIMARY KEY(id) )'
        this.conexao.query(medico, erro => {
            if (erro) {
                console.log(erro)
            }else {
                console.log('Tabela Medico criada com sucesso')
            }
        })
      /*   this.conexao.query(especialidades, erro => {
            if (erro) {
                console.log(erro)
            }else {
                console.log('Tabela Especialidades criada com sucesso')
            }
        }) */
    }
    
}
module.exports = new Tabelas