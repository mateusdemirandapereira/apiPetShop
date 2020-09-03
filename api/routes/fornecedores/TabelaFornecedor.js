const Modelo = require("./ModeloTabelaFornecedor");

class TabelaFornecedor {

    static async listar() {

        return await Modelo.findAll();
    }
    static async inserir(fornecedor) {
        return await Modelo.create(fornecedor);
    }
    static async pegaPorId(id) {
        const encontrado = await Modelo.findOne({ where: { id } });

        if (!encontrado) {
            throw new Error("Fornecedor não encontrado");
        } else {
            return encontrado;
        }

    }
    static async atualizar(id, dadosParaAtualizar) {
        return await Modelo.update(dadosParaAtualizar, { where: { id } })
    }
    static async remover (id) {
     return await  Modelo.destroy({where:{id}});
    }
}


module.exports = TabelaFornecedor;