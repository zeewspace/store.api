import { entities } from "../lib/db/entities";
import { sequelize } from "../lib/db";
import { DataTypes } from "sequelize";

const initDB = async () => {
  const Models = entities(sequelize, DataTypes);

    for (let i = 0; i <= 10; i++) {
      Models.User.create({
          username: `user ${i}`,
          password: `password-${i}`,
          email: `user_${i}@email.com`
      })
    }

  for (let i = 0; i <= 50; i++) {

    const cate = await Models.Category.create({
        name: `category X ${i}`,
      });

    const pro = await Models.Product.create({
      name: `product ${i}`,
      description: `product ${i} product ${i} product ${i} product ${i} product ${i} product ${i} product ${i} product ${i} product ${i} product ${i}`,
      price: i,
      image: "https://picsum.photos/200/300",
    });

    // add category
    pro.addCategory(cate)


  }
};

initDB();
