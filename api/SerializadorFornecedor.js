const {Serializador} = require("./Serializador");


class SerializadorFornecedor extends Serializador {
    constructor(contentType,camposExtras){
        super();
        this.contentType = contentType;
        this.camposPublicos = ["id","empresa","categoria"].concat(camposExtras || []);
        this.tagSingular = "fornecedor";
        this.tagPlural = "fornecedores"
    }
}

module.exports = SerializadorFornecedor;