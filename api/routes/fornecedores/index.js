const router = require("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");

router.get("/", async (req, res) => {
    const result = await TabelaFornecedor.listar();

    return res.send(
        JSON.stringify(result)
    );
});

router.post("/", async (req, res) => {
    const dados = req.body;
    const fornecedor = new Fornecedor(dados);
    await fornecedor.criar();
    return res.send(
        JSON.stringify(fornecedor)
    );

});

router.get("/:idFornecedor", async (req, res) => {
    try{
        const { idFornecedor } = req.params;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        await fornecedor.carregar()
        return res.send(JSON.stringify(fornecedor));

    }catch(erro){
        res.send(
            JSON.stringify({mensagem:erro.message})
        );
    }
});

router.put("/:idFornecedor",async (req,res)=>{
    try{
        const {idFornecedor} = req.params;
        const dadosRecebidos = req.body;
        const dados = Object.assign({},dadosRecebidos,{id:idFornecedor});
        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar()
        res.send()
    }catch(erro){
        res.send(
            JSON.stringify({mensagem:erro.message})
        );
    }
})



module.exports = router;