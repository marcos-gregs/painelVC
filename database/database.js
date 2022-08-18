const mongoose = require("mongoose");
const conectDB = "mongodb://localhost/code_product";

mongoose.connect(conectDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Acoplando conexão db
const conexion = mongoose.connection;

module.exports = conexion;
