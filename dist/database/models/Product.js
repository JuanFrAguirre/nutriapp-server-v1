"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Product.ts
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    tags: {
        type: sequelize_1.DataTypes.TEXT,
    },
    presentationSize: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.TEXT,
    },
    calories: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    proteins: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    fats: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    carbohydrates: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: __1.default,
    timestamps: false,
});
exports.default = Product;
