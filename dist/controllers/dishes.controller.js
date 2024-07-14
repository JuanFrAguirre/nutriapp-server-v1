"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDish = exports.editDish = exports.addDish = exports.getDish = exports.getDishes = void 0;
const models_1 = __importDefault(require("../database/models"));
const { Dish, Product } = models_1.default;
const getDishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dishes = yield Dish.findAll({ include: Product });
        return res.json(dishes);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
exports.getDishes = getDishes;
const getDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dish = yield Dish.findByPk(id, { include: Product });
        if (!dish)
            return res.json(404);
        return res.json(dish);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
exports.getDish = getDish;
const addDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, products } = req.body;
        const newDish = yield Dish.create({ title });
        products.forEach((productId) => __awaiter(void 0, void 0, void 0, function* () {
            const product = yield Product.findByPk(productId);
            if (!product)
                return;
            yield newDish.addProduct(product);
        }));
        return res.json(newDish);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
exports.addDish = addDish;
const editDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dish = yield Dish.findByPk(id, { include: Product });
        if (!dish)
            return res.json(404);
        yield Dish.update(req.body, { where: { id } });
        return res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
exports.editDish = editDish;
const deleteDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Dish.destroy({ where: { id } });
        return res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
exports.deleteDish = deleteDish;
