const model = require ("../routes/fornecedores/ModeloTabelaFornecedor.js");

(async ()=>{
    try{
        await model.sync();
        console.log("tabela criada com sucesso");
    }catch(erro){
        console.log(erro);
    }
})();