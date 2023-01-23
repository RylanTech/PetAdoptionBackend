import { Sequelize } from "sequelize";
import { petFactory } from "./pets";

const dbName = 'petDB';
const username = 'root';
const password = 'YourPasswordHere';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

petFactory(sequelize);

export const db = sequelize;