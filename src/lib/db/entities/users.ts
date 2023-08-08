export const UserModel = (sequelize: any, DataTypes: any) => {
  const UserSchema = sequelize.define(
    "Users",
    {
      id: {
        primaryKey: true, // auto increment
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
  return UserSchema
};
