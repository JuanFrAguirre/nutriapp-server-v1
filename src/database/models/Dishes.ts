// models/Dish.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '..';
import Product from './Product';

interface DishAttributes {
  id: string;
  title: string;
  tags?: string;
  image?: string;
  calories?: number;
  proteins?: number;
  fats?: number;
  carbohydrates?: number;
}

interface DishCreationAttributes extends Optional<DishAttributes, 'id'> {}

class Dish
  extends Model<DishAttributes, DishCreationAttributes>
  implements DishAttributes
{
  public id!: string;
  public title!: string;
  public tags?: string;
  public image?: string;
  public calories?: number;
  public proteins?: number;
  public fats?: number;
  public carbohydrates?: number;

  public addProduct!: (product: Product) => Promise<void>;
}

Dish.init(
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
    image: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: false,
  },
);

export default Dish;
