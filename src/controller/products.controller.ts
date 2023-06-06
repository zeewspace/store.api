import type { Request, Response } from "express";
import ProductsService from "../services/products.services";

export default class ProductsController {
  constructor(private productService: ProductsService) {}

  async getProducts(_req: Request, res: Response) {
    const products = await this.productService.getProducts();

    res.status(200).json({
      data: products,
      message: "products listed",
    });
  }

  async getProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const product = await this.productService.getProduct(productId);

    res.status(200).json({
      data: product,
      message: "product retrieved",
    });
  }

  async createProduct(req: Request, res: Response) {
    const { body: product } = req;
    const createdProductId = await this.productService.createProduct(product);

    res.status(201).json({
      data: createdProductId,
      message: "product created",
    });
  }

  async updateProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const { body: product } = req;
    const updatedProductId = await this.productService.updateProduct(
      productId,
      product
    );

    res.status(200).json({
      data: updatedProductId,
      message: "product updated",
    });
  }

  async deleteProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const deletedProductId = await this.productService.deleteProduct(productId);

    res.status(200).json({
      data: deletedProductId,
      message: "product deleted",
    });
  }
}
