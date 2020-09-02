const express = require("express");
const app = express();
const config = require ("config");
app.use(express.json());


const routes = require ("./routes/index");

routes(app);

app.listen(config.get("api.porta"),()=>console.log(`API estar rodando na porta ${config.get("api.porta")}`));

