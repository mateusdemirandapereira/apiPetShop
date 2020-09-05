class ValorNaosuportado extends Error{
    constructor(contentType){
        super(`O tipo de conteudo ${contentType} não é suportado`)
        this.name = "ValorNaoSuportado";
        this.idError = 3;
    }
}

module.exports = ValorNaosuportado;