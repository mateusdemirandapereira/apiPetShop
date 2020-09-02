const router = require ("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");

router.get("/",async (req,res)=>{
    const result = await TabelaFornecedor.listar();

    return res.send(
        JSON.stringify(result)
    );
});

router.post("/",(req,res)=>{
    const dados = req.body;
    const fornecedor = new Fornecedor(dados);

})



module.exports = router;