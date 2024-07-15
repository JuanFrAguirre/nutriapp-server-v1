"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNutriValue = void 0;
const getNutriValue = (array, value) => {
    return array.reduce((acc, curr) => acc + curr[value], 0);
};
exports.getNutriValue = getNutriValue;
