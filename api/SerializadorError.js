const {Serializador} = require("./Serializador");


class SerializadorError extends Serializador {
    constructor(contentType,camposExtras){
        super();
        this.contentType = contentType,
        this.camposPublicos = ["id","mensagem"].concat(camposExtras || []);
        this.tagSingular = "erro";
        this.tagPlural = "erros"
    }
}

module.exports = SerializadorError;