import productMocks from "../utils/mocks/products.json";

export default class ProductsService {
  async getProducts() {
    const products = await Promise.resolve(productMocks);
    return products || [];
  }

  async getProduct(_productId: string) {
    const product = await Promise.resolve(productMocks[0]);
    return product || {};
  }

  async createProduct(_product: any) {
    const createdProductId = await Promise.resolve(productMocks[0].id);
    return createdProductId;
  }

  async updateProduct(_productId: string, _product: any) {
    const updatedProductId = await Promise.resolve(productMocks[0].id);
    return updatedProductId;
  }

  async deleteProduct(_productId: string) {
    const deletedProductId = await Promise.resolve(productMocks[0].id);
    return deletedProductId;
  }
}
