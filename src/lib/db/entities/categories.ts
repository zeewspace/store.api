export const CategoriesModel = (sequelize: any, DataTypes: any) => {
    const CategoriesSchema = sequelize.define(
      "Categories",
      {
        id: {
          primaryKey: true, // auto increment
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        }
      },
      {
        sequelize,
      }
    );
    return CategoriesSchema;
  };
  