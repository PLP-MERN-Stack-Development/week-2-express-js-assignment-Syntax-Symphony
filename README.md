# 📦 Product API - Express.js Assignment (Week 2)

This is a RESTful API built with **Express.js** for managing a product catalog. It includes full CRUD operations and custom middleware for logging, authentication, and validation.

## 🔧 Features

- **GET /api/products** – Retrieve all products (with optional `category`, `search`, `page`, `limit`)
- **GET /api/products/:id** – Retrieve a specific product by ID
- **POST /api/products** – Add a new product *(protected by authentication and validation)*
- **PUT /api/products/:id** – Update an existing product *(protected)*
- **DELETE /api/products/:id** – Delete a product *(protected)*

## 🛡 Middleware

- **Logger** – Logs every incoming request with method and timestamp
- **Authentication** – Requires `x-api-key: mysecretkey` in request header
- **Validation** – Ensures product fields are present and correct during POST/PUT

## 🧪 Sample Product Format

```json
{
  "name": "Headphones",
  "description": "Noise-cancelling wireless headphones",
  "price": 150,
  "category": "electronics",
  "inStock": true
}
