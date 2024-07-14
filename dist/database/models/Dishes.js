"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Dish.ts
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
class Dish extends sequelize_1.Model {
}
Dish.init({
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
    image: {
        type: sequelize_1.DataTypes.TEXT,
    },
    calories: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    proteins: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    fats: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    carbohydrates: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
}, {
    sequelize: __1.default,
    timestamps: false,
});
exports.default = Dish;
