import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
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
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
