export const ProductModel = (sequelize: any, DataTypes: any) => {
  const ProductSchema = sequelize.define(
    "Products",
    {
      id: {
        primaryKey: true, // auto increment
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
  return ProductSchema;
};
