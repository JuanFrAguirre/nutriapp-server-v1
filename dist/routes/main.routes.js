"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_controller_1 = require("../controllers/main.controller");
const router = (0, express_1.Router)();
router
    .get('/', main_controller_1.ping)
    .get('/products', main_controller_1.getProducts)
    .get('/products/:id', main_controller_1.getProduct)
    .post('/products', main_controller_1.addProduct)
    .post('/products/bulk', main_controller_1.bulkAddProduct)
    .put('/products/:id', main_controller_1.editProduct)
    .delete('/products/:id', main_controller_1.deleteProduct);
exports.default = router;
