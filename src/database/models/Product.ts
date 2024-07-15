// models/Product.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '..';

export interface ProductAttributes {
  id: string;
  title: string;
  tags?: string;
  presentationSize: number;
  image?: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: string;
  public title!: string;
  public tags?: string;
  public presentationSize!: number;
  public image?: string;
  public calories!: number;
  public proteins!: number;
  public fats!: number;
  public carbohydrates!: number;
}

Product.init(
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
    sequelize,
    timestamps: false,
  },
);

export default Product;
