import { UserModel } from "./entities/users";
import { ProductModel } from "./entities/products";
import { CategoriesModel } from "./entities/categories";

export const entities = (sequelize: any, datatypes: any) => {
  const User = UserModel(sequelize, datatypes);
  const Category = CategoriesModel(sequelize, datatypes);
  const Product = ProductModel(sequelize, datatypes);

  // Relation
  Product.belongsToMany(Category, { through: "ProductCategory", timestamps: false });
  Category.belongsToMany(Product, { through: "ProductCategory", timestamps: false });


//   sequelize.sync({ force: true });
  return {
    User,
    Category,
    Product,
  };
};
