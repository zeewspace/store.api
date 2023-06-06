
import ProductsService from '../services/products.services';
import ProductsRoutes from '../routes/products.routes';
import ProductsController from '../controller/products.controller';

const productsController = new ProductsController(new ProductsService());
const productsRoutes = new ProductsRoutes(productsController);

export {
    productsRoutes,
}