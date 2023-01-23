import { InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes} from "sequelize";

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{
    declare petId: number;
    declare name: string;
    declare imgUrl: string;
    declare description: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
    declare petType: string;
}

export function petFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        petType: {
            type: DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
        tableName: 'pets',
        sequelize
    });
}