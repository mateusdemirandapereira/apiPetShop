const router = require("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");
const SerializadorFornecedor = require("../../SerializadorFornecedor");
router.get("/", async (req, res) => {
    const result = await TabelaFornecedor.listar();
    const serializador = new SerializadorFornecedor(res.getHeader("Content-Type"));
    res.status(200)
    return res.send(
        serializador.serializar(result)
    );
});

router.post("/", async (req, res,next) => {
    try {

        const dados = req.body;
        const fornecedor = new Fornecedor(dados);
        await fornecedor.criar();
        const serializador = new SerializadorFornecedor(res.getHeader("Content-Type"));
        res.status(201)
        return res.send(
            serializador.serializar(fornecedor)
        );
    } catch (erro) {
        return next(erro);
    }

});

router.get("/:idFornecedor", async (req, res,next) => {
    try {
        const { idFornecedor } = req.params;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        await fornecedor.carregar()
        const serializador = new SerializadorFornecedor(res.getHeader("Content-Type"),["email","dataCriacao","dataAtualizacao","versao"]);
        res.status(200);
        return res.send(
            serializador.serializar(fornecedor)
            );

    } catch (erro) {
        return next(erro);
    }
});

router.put("/:idFornecedor", async (req, res,next) => {
    try {
        const { idFornecedor } = req.params;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: idFornecedor });
        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar()
        res.status(204)
        return res.end()
    } catch (erro) {
        return next(erro);
    }
});

router.delete("/:idFornecedor", async (req, res,next) => {
    try {
        const { idFornecedor } = req.params;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        await fornecedor.carregar();
        await fornecedor.remover();
        res.status(204)
        return res.end();
    } catch (erro) {
       return next(erro);
    }
})



module.exports = router;