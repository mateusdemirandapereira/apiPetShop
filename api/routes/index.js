const fornecedores = require("./fornecedores/index");
module.exports = app =>{
    app.use("/api/fornecedores",fornecedores);
}