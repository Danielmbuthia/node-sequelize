const dbConfig = require("../../config/db/config.js");
const Sequelize = require("sequelize");
const DB = process.env.DATABASE_NAME;
const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASS;
const HOST = process.env.DATABASE_HOST;
const dialect = process.env.DATABASE;
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.js")(sequelize, Sequelize);

module.exports = db;