"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const router = (0, express_1.Router)();
router
    .get('/', products_controller_1.getProducts)
    .get('/:id', products_controller_1.getProduct)
    .post('/', products_controller_1.addProduct)
    .post('/bulk', products_controller_1.bulkAddProduct)
    .put('/:id', products_controller_1.editProduct)
    .delete('/:id', products_controller_1.deleteProduct);
exports.default = router;
