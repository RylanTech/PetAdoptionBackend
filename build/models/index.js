"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const pets_1 = require("./pets");
const dbName = 'petDB';
const username = 'root';
const password = '0624';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, pets_1.petFactory)(sequelize);
exports.db = sequelize;
