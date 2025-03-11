const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Product",
  tableName: "products",
  target: Product,
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    title: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    description: {
      type: "text",
      nullable: true,
    },
    price: {
      type: "int",
      nullable: false,
    },
    image_url: {
      type: "varchar",
      nullable: true,
    },
    
  },
  relations: {
    category: {
      type: "many-to-one",
      target: "Category",
      inverseSide: "products",
      nullable: false,
    },
  },
});
