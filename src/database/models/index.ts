import Dish from './Dishes';
import Product from './Product';

Product.belongsToMany(Dish, { through: 'DishProduct' });
Dish.belongsToMany(Product, { through: 'DishProduct' });

export default { Product, Dish };
