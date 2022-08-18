const mongoose = require("mongoose");

// Criando table

const ProductSchema = new mongoose.Schema({
  nome_product: { type: String, required: true },
  codigo: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model("Product", ProductSchema);
