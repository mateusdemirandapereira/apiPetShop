const Modelo = require("./ModeloTabelaFornecedor");

class TabelaFornecedor {

    static async listar(){
    
        return await Modelo.findAll(); 
    }

}


module.exports = TabelaFornecedor;