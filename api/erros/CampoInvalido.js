class CampoInvalido extends Error {
    constructor (campo){
        super(`O campo ${campo} está invalido`);
        this.name = "CampoInvalido";
        this.idError = 1
    }
}


module.exports = CampoInvalido;