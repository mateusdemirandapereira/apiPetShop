const fornecedores = require("./fornecedores/index");
const NaoEncontrado = require("../erros/NaoEncontrado");
const CampoInvalido = require("../erros/CampoInvalido");
const DadosNaoFornecidos = require("../erros/DadosNaoFornecidos");
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");
module.exports = app =>{
    app.use("/api/fornecedores",fornecedores);
    app.use((erro,req,res,next)=>{
        let status = 500;
        if (erro instanceof NaoEncontrado){
            status=404;
        }
        if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
            status=400;
        }
        if (erro instanceof ValorNaoSuportado){
            status = 406;
        }
        res.status(status);
       return res.send(
            JSON.stringify({ mensagem: erro.message, id:erro.idError })
        );
    })
}