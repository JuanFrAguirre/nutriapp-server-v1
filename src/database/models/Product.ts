import { DataTypes } from 'sequelize';
import sequelize from '..';

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tags: {
      type: DataTypes.TEXT,
    },
    presentationSize: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    proteins: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fats: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    carbohydrates: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default Product;
