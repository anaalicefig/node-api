const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Primeira rota
routes.get("/", (req, res) => {
    return res.send("OK!");
});

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;