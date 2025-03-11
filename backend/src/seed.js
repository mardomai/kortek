const { ProductService } = require("medusa-core-services");

async function seed() {
  const productService = new ProductService();
  await productService.create({
    title: "Example Product",
    description: "This is a product description.",
    price: 1999,
    image_url: "http://example.com/product-image.jpg",
    category_id: 1, 
  });
}

seed().then(() => console.log("Products seeded!"));
