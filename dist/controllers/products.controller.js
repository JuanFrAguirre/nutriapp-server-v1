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
exports.deleteProduct = exports.editProduct = exports.bulkAddProduct = exports.addProduct = exports.getProduct = exports.getProducts = void 0;
const models_1 = __importDefault(require("../database/models"));
const { Product } = models_1.default;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.findAll();
        return res.json(products);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product.findByPk(id);
        if (!product)
            return res.sendStatus(404);
        return res.json(product);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getProduct = getProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield Product.create(req.body);
        return res.status(201).json(newProduct);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.addProduct = addProduct;
const bulkAddProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = req.body.products;
        const newProducts = yield Product.bulkCreate(products);
        return res.status(201).json(newProducts);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.bulkAddProduct = bulkAddProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product.findByPk(id);
        if (!product)
            return res.sendStatus(404);
        yield Product.update(req.body, { where: { id } });
        return res.sendStatus(200);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.editProduct = editProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product.findByPk(id);
        if (!product)
            return res.sendStatus(404);
        yield Product.destroy({ where: { id } });
        return res.sendStatus(200);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.deleteProduct = deleteProduct;
