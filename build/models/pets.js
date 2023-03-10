"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petFactory = exports.Pet = void 0;
const sequelize_1 = require("sequelize");
class Pet extends sequelize_1.Model {
}
exports.Pet = Pet;
function petFactory(sequelize) {
    Pet.init({
        petId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        petType: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
        tableName: 'pets',
        sequelize
    });
}
exports.petFactory = petFactory;
