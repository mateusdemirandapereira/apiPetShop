const fornecedores = require("./fornecedores/index");
const NaoEncontrado = require("../erros/NaoEncontrado");
const CampoInvalido = require("../erros/CampoInvalido");
const DadosNaoFornecidos = require("../erros/DadosNaoFornecidos");
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");
const { formatosAceitos } = require("../Serializador")
const SerializadorError = require("../SerializadorError");
module.exports = app => {
    app.use((req, res, next) => {
        let formatoReq = req.header("Accept");
        if (formatoReq == "*/*") {
            formatoReq = "application/json";
        }

        if (formatosAceitos.indexOf(formatoReq) == -1) {
            res.status(406);
            return res.end()
        }
        res.setHeader("Content-Type", formatoReq);
        return next();
    })
    app.use("/api/fornecedores", fornecedores);
    app.use((erro, req, res, next) => {
        let status = 500;
        if (erro instanceof NaoEncontrado) {
            status = 404;
        }
        if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
            status = 400;
        }
        if (erro instanceof ValorNaoSuportado) {
            status = 406;
        }
        const serializador = new SerializadorError(
            res.getHeader("Content-Type")
        )
        res.status(status);
        return res.send(
            serializador.serializar({ mensagem: erro.message, id: erro.idError })
        );
    })
}