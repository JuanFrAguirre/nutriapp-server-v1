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
exports.deleteProduct = exports.editProduct = exports.addProduct = exports.getProduct = exports.getProducts = exports.ping = void 0;
const Product_1 = __importDefault(require("../database/models/Product"));
const ping = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json('hello!');
});
exports.ping = ping;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.findAll();
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
        const product = yield Product_1.default.findByPk(id);
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
        const newProduct = yield Product_1.default.create(req.body);
        return res.status(201).json(newProduct);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.addProduct = addProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product_1.default.findByPk(id);
        if (!product)
            return res.sendStatus(404);
        yield Product_1.default.update(req.body, { where: { id } });
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
        const product = yield Product_1.default.findByPk(id);
        if (!product)
            return res.sendStatus(404);
        yield Product_1.default.destroy({ where: { id } });
        return res.sendStatus(200);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.deleteProduct = deleteProduct;
