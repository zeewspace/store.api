import ProductsController from "../controller/products.controller";

export default class ProductsRoutes {
    constructor(private productsController: ProductsController) {}
    
    public async getRoutes(app: any, router: any) {
        router.get("/products", this.productsController.getProducts.bind(this.productsController));
        router.get("/products/:productId", this.productsController.getProduct.bind(this.productsController));
        router.post("/products", this.productsController.createProduct.bind(this.productsController));
        router.put("/products/:productId", this.productsController.updateProduct.bind(this.productsController));
        router.delete("/products/:productId", this.productsController.deleteProduct.bind(this.productsController));
    
        app.use(router);
    }
}