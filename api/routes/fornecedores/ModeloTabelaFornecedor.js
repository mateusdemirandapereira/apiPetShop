const {DataTypes} = require ("sequelize");
const sequelize = require("../../bancoDeDados/index");
const colunas = {
    empresa: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    categoria:{
        type:DataTypes.ENUM("ração","brinquedos"),
        allowNull:false
    }
}

const opcoes = {
    freezeTableName:true,
    tableName:"fornecedores",
    timestamps:true,
    createdAt:"dataCriacao",
    updatedAt:"dataAtualizacao",
    version:"versao"
}
module.exports = sequelize.define("fornecedor",colunas,opcoes)