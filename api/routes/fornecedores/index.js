const router = require("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");

router.get("/", async (req, res) => {
    const result = await TabelaFornecedor.listar();
    res.status(200)
    return res.send(
        JSON.stringify(result)
    );
});

router.post("/", async (req, res) => {
    try {

        const dados = req.body;
        const fornecedor = new Fornecedor(dados);
        await fornecedor.criar();
        res.status(201)
        return res.send(
            JSON.stringify(fornecedor)
        );
    } catch (erro) {
        res.status(400);
        return res.send(
            JSON.stringify({ mensagem: erro.message })
        );
    }

});

router.get("/:idFornecedor", async (req, res) => {
    try {
        const { idFornecedor } = req.params;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        await fornecedor.carregar()
        res.status(200);
        return res.send(JSON.stringify(fornecedor));

    } catch (erro) {
        res.status(404);
       return res.send(
            JSON.stringify({ mensagem: erro.message })
        );
    }
});

router.put("/:idFornecedor", async (req, res) => {
    try {
        const { idFornecedor } = req.params;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: idFornecedor });
        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar()
        res.status(204)
        return res.send()
    } catch (erro) {
        res.status(400);
       return res.send(
            JSON.stringify({ mensagem: erro.message })
        );
    }
});

router.delete("/:idFornecedor", async (req, res) => {
    try {
        const { idFornecedor } = req.params;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        await fornecedor.carregar();
        await fornecedor.remover();
        res.status(204)
        return res.end();
    } catch (erro) {
        res.status(404);
        return res.send(
            JSON.stringify({ mensagem: erro.message })
        );
    }
})



module.exports = router;