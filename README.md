# API Documentation

## Endpoints

### categories

- `/api/categories`: Endpoint para obtener una lista de todas las categorías disponibles en la tienda en línea.
- `/api/categories/{categoryId}`: Endpoint para obtener los detalles de una categoría específica, incluyendo una lista de los productos que pertenecen a esa categoría.

### products

- `/api/products?category={categoryId}`: Endpoint para obtener una lista de todos los
- `/api/products`: Endpoint para obtener una lista de productos.
- `/api/products/{productId}`: Endpoint para obtener los detalles de un producto específico.
- `/api/products/{productId}/reviews`: Endpoint para obtener las reseñas de un producto específico.

### cart

- `/api/cart`: Endpoint para obtener el contenido del carrito de compras del usuario.
- `/api/cart/{productId}`: Endpoint para agregar un producto al carrito de compras.
- `/api/cart/{productId}`: Endpoint para eliminar un producto del carrito de compras.

### checkout

- `/api/checkout`: Endpoint para procesar una orden de compra.

### orders

- `/api/orders`: Endpoint para obtener una lista de todas las órdenes de compra del usuario.
- `/api/orders/{orderId}`: Endpoint para obtener los detalles de una orden de compra específica.

### users

- `/api/users`: Endpoint para obtener información del usuario registrado.
- `/api/users/register`: Endpoint para registrar un nuevo usuario.
- `/api/users/login`: Endpoint para autenticar a un usuario.

### reviews

- `/api/reviews`: Endpoint para obtener una lista de todas las reseñas de productos.
- `/api/reviews/{reviewId}`: Endpoint para obtener los detalles de una reseña específica.



## SQL

### SQL USER

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    address VARCHAR(200),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

```

### SQL PRODUCT

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(200),
    category_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);
```

### SQL CATEGORY

```sql
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    parent_category_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);
```

### SQL ORDER

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

### SQL ORDER_ITEM

```sql
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

```

### REVIEW

```sql
CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);
```