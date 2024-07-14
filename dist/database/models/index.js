"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dishes_1 = __importDefault(require("./Dishes"));
const Product_1 = __importDefault(require("./Product"));
Product_1.default.belongsToMany(Dishes_1.default, { through: 'DishProduct' });
Dishes_1.default.belongsToMany(Product_1.default, { through: 'DishProduct' });
exports.default = { Product: Product_1.default, Dish: Dishes_1.default };
