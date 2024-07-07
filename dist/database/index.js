"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
});
try {
    sequelize.sync({
        alter: process.env.MODE === 'alter' || false,
        force: process.env.MODE === 'force' || false,
    });
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
exports.default = sequelize;
