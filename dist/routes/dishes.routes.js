"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dishes_controller_1 = require("../controllers/dishes.controller");
const router = (0, express_1.Router)();
router
    .get('/', dishes_controller_1.getDishes)
    .get('/:id', dishes_controller_1.getDish)
    .post('/', dishes_controller_1.addDish)
    .put('/:id', dishes_controller_1.editDish)
    .delete('/:id', dishes_controller_1.deleteDish);
exports.default = router;
