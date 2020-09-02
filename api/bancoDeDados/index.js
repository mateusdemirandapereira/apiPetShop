const Sequelize = require ("sequelize");
const config = require("config");

const sequelize = new Sequelize(
        config.get("postgres.db.dbName"),
        config.get("postgres.db.userName"),
        config.get("postgres.db.password"),
    {
        host:config.get("postgres.db.host"),
        dialect:"postgres"
    }

);

module.exports = sequelize;
